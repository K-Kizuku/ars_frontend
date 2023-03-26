type ActionType<State> = (state: State, ...data: any) => void | any;

type ActionTree<State> = {
  [action: string]: ActionType<State>;
};
enum ChangedType {
  /** 差分なし */
  None,
  /** nodeの型が違う */
  Type,
  /** テキストノードが違う */
  Text,
  /** ノード名(タグ名)が違う */
  Node,
  /** inputのvalueが違う */
  Value,
  /** 属性が違う */
  Attr,
}

interface AppConstructor<State, Actions extends ActionTree<State>> {
  /** メインNode */
  el: Element | string;
  /** Viewの定義 */
  view: View<State, Actions>;
  /** 状態管理 */
  state: State;
  /** Actionの定義 */
  actions: Actions;
}

class App<State, Actions extends ActionTree<State>> {
  private readonly el: Element;
  private readonly view: AppConstructor<State, Actions>["view"];
  private readonly state: AppConstructor<State, Actions>["state"];
  private readonly actions: AppConstructor<State, Actions>["actions"];

  /** 仮想DOM（変更前用） */
  private oldNode: VNode;
  /** 仮想DOM（変更後用） */
  private newNode: VNode;

  /** 連続でリアルDOM操作が走らないためのフラグ */
  private skipRender: boolean;

  constructor(params: AppConstructor<State, Actions>) {
    this.el =
      typeof params.el === "string"
        ? // WARNING: nullかも
          document.querySelector(params.el)!
        : params.el;
    this.view = params.view;
    this.state = params.state;
    this.actions = this.dispatchAction(params.actions);
    this.resolveNode();
  }

  /**
   * ユーザが定義したActionsに仮想DOM再構築用のフックを仕込む
   * @param actions
   */
  private dispatchAction(actions: Actions): Actions {
    const dispatched: ActionTree<State> = {};

    for (const key in actions) {
      const action = actions[key];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      dispatched[key] = (state: State, ...data: any): any => {
        const ret = action(state, ...data);
        this.resolveNode();
        return ret;
      };
    }

    return dispatched as Actions;
  }

  /**
   * 仮想DOMを構築する
   */
  private resolveNode(): void {
    // 仮想DOMを再構築する
    this.newNode = this.view(this.state, this.actions);
    this.scheduleRender();
  }

  /**
   * renderのスケジューリングを行う
   */
  private scheduleRender(): void {
    if (!this.skipRender) {
      this.skipRender = true;
      // setTimeoutを使うことで非同期になり、かつ実行を数ミリ秒遅延できる
      setTimeout(this.render.bind(this));
    }
  }

  /**
   * リアルDOMに反映する
   */
  private render(): void {
    if (this.oldNode) {
      updateElement(this.el as HTMLElement, this.oldNode, this.newNode);
    } else {
      this.el.appendChild(createElement(this.newNode));
    }

    this.oldNode = this.newNode;
    this.skipRender = false;
  }
}
type NodeType = VNode | string | number;
type Attributes = { [key: string]: string | Function };

type View<State, Actions> = {
  (state: State, actions: Actions): VNode;
};

/**
 * 仮想DOM
 */
type VNode = {
  // WARNING: ElementTagNameMapとの互換性の確認
  nodeName: keyof HTMLElementTagNameMap;
  attributes: Attributes;
  children: NodeType[];
};

/**
 * 仮想DOMの生成
 */
const createVElement = (
  nodeName: VNode["nodeName"],
  attributes: VNode["attributes"],
  ...children: VNode["children"]
): VNode => {
  return { nodeName, attributes, children };
};

/**
 * リアルDOMの生成
 */
const createElement = (node: NodeType): HTMLElement | Text => {
  if (!isVNode(node)) {
    return document.createTextNode(node.toString());
  }

  const element = document.createElement(node.nodeName);
  setAttributes(element, node.attributes);
  node.children.forEach((child) => element.appendChild(createElement(child)));
  return element;
};

const isVNode = (node: NodeType): node is VNode => {
  return typeof node !== "string" && typeof node !== "number";
};

const setAttributes = (target: HTMLElement, attributes: Attributes): void => {
  for (let attribute in attributes) {
    if (isEventAttribute(attribute)) {
      const eventName = attribute.slice(2);
      target.addEventListener(
        eventName,
        attributes[attribute] as EventListener
      );
    } else {
      target.setAttribute(attribute, attributes[attribute] as string);
    }
  }
};

const isEventAttribute = (attribute: string): boolean => {
  // onで始まる属性はイベントとして扱う
  return /^on/.test(attribute);
};

/**
 * 受け取った2つの仮想DOMの差分を検知する
 */
const hasChanged = (a: NodeType, b: NodeType): ChangedType => {
  // different type
  if (typeof a !== typeof b) {
    console.log("type");
    return ChangedType.Type;
  }

  // different string
  if (!isVNode(a) && a !== b) {
    console.log("text");

    return ChangedType.Text;
  }

  // 簡易的比較
  if (isVNode(a) && isVNode(b)) {
    if (a.nodeName !== b.nodeName) {
      return ChangedType.Node;
    }
    if (a.attributes.value !== b.attributes.value) {
      return ChangedType.Value;
    }
    if (JSON.stringify(a.attributes) !== JSON.stringify(b.attributes)) {
      return ChangedType.Attr;
    }
  }
  return ChangedType.None;
};

/**
 * 仮想DOMの差分を検知し、リアルDOMに反映する
 */
const updateElement = (
  parent: HTMLElement,
  oldNode: NodeType,
  newNode: NodeType,
  index = 0
): void => {
  // oldNodeがない場合は新しいノード
  if (!oldNode) {
    parent.appendChild(createElement(newNode));
    return;
  }
  console.log("new", newNode);
  if (!parent.hasChildNodes()) {
    return;
  }
  const target = parent.childNodes[index];
  console.log("child", target);

  // newNodeがない場合はそのノードを削除する
  if (!newNode) {
    parent.removeChild(target);
    return;
  }
  // 両方ある場合は差分検知し、パッチ処理を行う
  const changeType = hasChanged(oldNode, newNode);
  switch (changeType) {
    case ChangedType.Type:
    case ChangedType.Text:
    case ChangedType.Node:
      parent.replaceChild(createElement(newNode), target);
      return;
    case ChangedType.Value:
      // valueの変更時にNodeを置き換えてしまうとフォーカスが外れてしまうため
      updateValue(
        target as HTMLInputElement,
        (newNode as VNode).attributes.value as string
      );
      return;
    case ChangedType.Attr:
      // 属性の変更は、Nodeを再作成する必要がないので更新するだけ
      updateAttributes(
        target as HTMLElement,
        (oldNode as VNode).attributes,
        (newNode as VNode).attributes
      );
      return;
  }

  //　再帰的にupdateElementを呼び出し、childrenの更新処理を行う
  if (isVNode(oldNode) && isVNode(newNode)) {
    for (
      let i = 0;
      i < newNode.children.length || i < oldNode.children.length;
      i++
    ) {
      updateElement(
        target as HTMLElement,
        oldNode.children[i],
        newNode.children[i],
        i
      );
    }
  }
};

// NodeをReplaceしてしまうとinputのフォーカスが外れてしまうため
const updateAttributes = (
  target: HTMLElement,
  oldAttributes: Attributes,
  newAttributes: Attributes
): void => {
  // remove attrs
  for (let attributes in oldAttributes) {
    if (!isEventAttribute(attributes)) {
      target.removeAttribute(attributes);
    }
  }
  // set attrs
  for (let attributes in newAttributes) {
    if (!isEventAttribute(attributes)) {
      target.setAttribute(attributes, newAttributes[attributes] as string);
    }
  }
};

// updateAttributesでやりたかったけど、value属性としては動かないので別途作成
const updateValue = (target: HTMLInputElement, newValue: string) => {
  target.value = newValue;
};

/**
 * State: 状態管理
 */
type Task = string;
type Form = {
  /** タスクのタイトル */
  title: string;
  /** バリデーション結果 */
  hasError: boolean;
};
type State = {
  /** タスク一覧 */
  tasks: Task[];
  /** フォームの状態 */
  form: Form;
};
const state: State = {
  tasks: ["Learn about Virtual DOM", "Write a document"],
  form: {
    title: "",
    hasError: false,
  },
};

/**
 * Actions: 各種イベント処理
 */
interface Actions extends ActionTree<State> {
  /** タイトルの入力チェックを行う */
  validate: (state: State, title: string) => boolean;
  /** 新しいタスクを作成する */
  createTask: (state: State, title: string) => void;
  /** indexで指定したタスクを削除する */
  removeTask: (state: State, index: number) => void;
}
const actions: Actions = {
  validate(state, title: string) {
    if (!title || title.length < 3 || title.length > 20) {
      state.form.hasError = true;
    } else {
      state.form.hasError = false;
    }

    return !state.form.hasError;
  },

  createTask(state, title = "") {
    state.tasks.push(title);
    state.form.title = "";
  },

  removeTask(state, index: number) {
    console.log(state.tasks);
    state.tasks.splice(index, 1);
  },
};

/**
 * View: 描画関連
 */
// const view: View<State, Actions> = (state, actions) => {
//   return createVElement(
//     "div",
//     {
//       class: "is-rounded",
//       style: "padding: 2rem;",
//     },
//     "test2"
//     // createVElement(
//     //   "a",
//     //   {
//     //     class: "link",
//     //     style: "padding: 2rem;",
//     //   },
//     //   "tetete"
//     // )
//   );
// };
const view: View<State, Actions> = (state, actions) => {
  // prettier-ignore
  return createVElement(
    'div',
    {
      class: 'nes-container is-rounded',
      style: 'padding: 2rem;'
    },
    createVElement(
      'h1',
      {
        class: 'title',
        style: 'margin-bottom: 2rem;'
      },
      createVElement('i', { class: 'nes-icon heart is-medium' }),
      'Virtual DOM TODO App '
    ),
    createVElement(
      'form',
      {
        class: 'nes-container',
        style: 'margin-bottom: 2rem;'
      },
      createVElement(
        'div',
        {
          class: 'nes-field',
          style: 'margin-bottom: 1rem;',
        },
        createVElement(
          'label',
          {
            class: 'label',
            for: 'task-title'
          },
          'Title'
        ),
        createVElement('input', {
          type: 'text',
          id: 'task-title',
          class: 'nes-input',
          value: state.form.title,
          oninput: (ev: Event) => {
            const target = ev.target as HTMLInputElement
            state.form.title = target.value
            actions.validate(state, target.value)
          }
        }),
      ),
      createVElement(
        'p',
        {
          class: 'nes-text is-error',
          style: `display: ${state.form.hasError ? 'display' : 'none'}`,
        },
        'Enter a value between 3 and 20 characters'
      ),
      createVElement(
        'button',
        {
          type: 'button',
          class: 'nes-btn is-primary',
          onclick: () => {
            if (state.form.hasError) return
            actions.createTask(state, state.form.title)
          }
        },
        'Create'
      )
    ),
    createVElement(
      'ul',
      { class: 'nes-list is-disc nes-container' },
      ...state.tasks.map((task, i) => {
        return createVElement(
          'li',
          {
            class: 'item',
            style: 'margin-bottom: 1rem;'
          },
          task,
          createVElement(
            'button',
            {
              type: 'button',
              class: 'nes-btn is-error',
              style: 'margin-left: 1rem;',
              onclick: () => actions.removeTask(state, i)
            },
            '×'
          )
        )
      })
    )
  )
};

new App<State, Actions>({
  el: "#app",
  state,
  view,
  actions,
});
