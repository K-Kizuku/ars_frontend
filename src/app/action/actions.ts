import { State, state } from "../state/states";

import type { Actions } from "./type";

export const actions: Actions = {
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
