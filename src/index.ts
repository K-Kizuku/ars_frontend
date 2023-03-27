import {
  ActionTree,
  View,
  createVElement,
  App,
  routerDOM,
  PagesInfo,
  Link,
  routingElement,
} from "@/framework";
// import { sidebar } from "@/components/sidebar";
// import { footer } from "./components/footer";
//  import { login } from "./app/pages/login";
// import { backcolorfootersidebar } from "./components/backcolorfootersidebar";
import { create } from "./app/pages/create";


/**
 * ルーティング設定
 */
const pages: PagesInfo = {
  "/": createVElement("div", {}, "testpage"),
  // "/sidebar": sidebar
  // "/footer": footer
  //  "/login": login
  //  "/backcolorfootersidebar": backcolorfootersidebar
  "/create": create
  
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
  return createVElement(
    "div",
    {
      class: "nes-container is-rounded",
      style: "padding: 2rem;",
    },
    createVElement(
      "h1",
      {
        class: "title",
        style: "margin-bottom: 2rem;",
      },
      createVElement("i", { class: "nes-icon heart is-medium" }),
      "Virtual DOM TODO App!!"
    ),
    routerDOM(pages),
    //  Link("home", "/sidebar"),
    // Link("home", "/footer"),
    //  Link("home", "/login"),
    // Link("home", "/backcolorfootersidebar"),
    Link("home", "/create"),
    Link("OKKKKK", "/"),
    createVElement(
      "form",
      {
        class: "nes-container",
        style: "margin-bottom: 2rem;",
      },
      createVElement(
        "div",
        {
          class: "nes-field",
          style: "margin-bottom: 1rem;",
        },
        createVElement(
          "label",
          {
            class: "label",
            for: "task-title",
          },
          "Title"
        ),
        createVElement("input", {
          type: "text",
          id: "task-title",
          class: "nes-input",
          value: state.form.title,
          oninput: (ev: Event) => {
            const target = ev.target as HTMLInputElement;
            state.form.title = target.value;
            actions.validate(state, target.value);
          },
        })
      ),
      createVElement(
        "p",
        {
          class: "nes-text is-error",
          style: `display: ${state.form.hasError ? "display" : "none"}`,
        },
        "Enter a value between 3 and 20 characters"
      ),
      createVElement(
        "button",
        {
          type: "button",
          class: "nes-btn is-primary",
          onclick: () => {
            if (state.form.hasError) return;
            actions.createTask(state, state.form.title);
          },
        },
        "Create"
      )
    ),
    createVElement(
      "ul",
      { class: "nes-list is-disc nes-container" },
      ...state.tasks.map((task, i) => {
        return createVElement(
          "li",
          {
            class: "item",
            style: "margin-bottom: 1rem;",
          },
          task,
          createVElement(
            "button",
            {
              type: "button",
              class: "nes-btn is-error",
              style: "margin-left: 1rem;",
              onclick: () => actions.removeTask(state, i),
            },
            "×"
          )
        );
      })
    )
  );
};

new App<State, Actions>({
  el: "#app",
  state,
  view,
  actions,
});
