import { State, state } from "../states/states";
// import { _factory } from "@/_factory";
import { Factory } from "@/framework";
import type { Actions } from "./type";
import { App } from "@/framework";

export const action: Actions = {
  validate(state, title: string) {
    if (!title || title.length < 3 || title.length > 20) {
      //   _factory.setState((_factory.getState().form.hasError = true));
      state.form.hasError = true;
    } else {
      state.form.hasError = false;

      //   _factory.setState((_factory.getState().form.hasError = false));
    }
    _factory.setState(state);
    return !_factory.getState().form.hasError;
  },

  createTask(state, title = "") {
    // _factory.setState(_factory.getState().tasks.push(title));
    state.tasks.push(title);
    // _factory.setState((_factory.getState().form.title = ""));
    state.form.title = "";
    _factory.setState(state);
  },

  removeTask(state, index: number) {
    // console.log(state.tasks);
    // _factory.setState(_factory.getState().tasks.splice(index, 1));
    state.tasks.splice(index, 1);
    _factory.setState(state);
  },
};
export const appRoot = new App<State, Actions>({
  el: "#app",
  state: state,
  actions: action,
  // factory: _factory,
});
export const _factory = new Factory({ state, action });
