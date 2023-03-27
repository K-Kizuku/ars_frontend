import { updateElement, createElement } from "./view";
import { ActionTree } from "./action";
import { VNode, View } from "./types";
import { Factory } from "../factory";
// import { __STATE__, __ACTION__ } from "../life/render";

// /**
//  * 状態管理用のグローバル変数
//  */
// export var __STATE__;

// /**
//  * アクション管理用のグローバル変数
//  */
// export var __ACTION__;

// export const stateFactory = <State>(): State => {
//   return __STATE__;
// };

// export const actionFactory = <Actions>(): Actions => {
//   return __ACTION__;
// };

interface AppConstructor<State, Actions extends ActionTree<State>> {
  /** メインNode */
  el: Element | string;
  /** Viewの定義 */
  view?: View<State, Actions>;
  /** 状態管理 */
  state: State;
  /** Actionの定義 */
  actions: Actions;
  /** Factoryの受け取り */
  // factory: Factory<State, Actions>;
}

export class App<State, Actions extends ActionTree<State>> {
  private el: Element;
  private view: AppConstructor<State, Actions>["view"];
  public state: AppConstructor<State, Actions>["state"];
  public actions: AppConstructor<State, Actions>["actions"];
  // private factory: AppConstructor<State, Actions>["factory"];

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
    // this.view = params.view;
    this.state = params.state;
    this.actions = this.dispatchAction(params.actions);
    // this.factory.setAction(this.actions);
    // this.resolveNode();
    console.log(params);
  }

  public Initiaraze(view: View<State, Actions>) {
    this.view = view;
    this.resolveNode();
  }
  /**
   * ユーザが定義したActionsに仮想DOM再構築用のフックを仕込む
   * @param actions
   */
  public dispatchAction(actions: Actions): Actions {
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
    // __ACTION__ = this.actions;
    // __STATE__ = this.state;
    // console.log("T", __ACTION__, __STATE__);
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
    console.log("gvkuv", this.actions);
    this.oldNode = this.newNode;
    this.skipRender = false;
  }
  public getAction() {
    return this.actions;
  }
}
