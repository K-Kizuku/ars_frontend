import { LifeRender, beforeRender, Factory, View, App } from "@/framework";
import { State, state } from "./app/states/states";
import { action, appRoot } from "./app/actions/actions";
import type { Actions } from "./app/actions/type";
import { app } from "./app";
// beforeRender({ state, action: action }, () => {});
// console.log("test");
// LifeRender(
//   { state, action: action },
//   () => {
//     console.log("b");
//   },
//   () => {
//     console.log("a");
//   }
// );
const view: View<State, Actions> = (state, action) => {
  return app(state, action);
};
// console.log(_factory);
// console.log(_factory.getState());
// console.log(_factory.getAction());

// window.addEventListener("DOMContentLoaded", () => {
// });
appRoot.Initiaraze(view);
// _factory.setAction(appRoot.dispatchAction(_factory.getAction()));
// window.addEventListener('DOMContentLoaded', () => {
//   const app = new App({
//     el: '#app',
//     state: {},
//     view: () => createVElement('form', { id: 'form' }),
//     actions: {}
//   });
// });
