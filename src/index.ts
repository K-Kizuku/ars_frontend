import { View, App } from "@/framework";
import { State, state } from "./app/state/states";
import { Actions } from "./app/action/type";
import { actions } from "./app/action/actions";
import { app } from "./app";

const view: View<State, Actions> = (state, action) => {
  return app(state, action);
};
new App<State, Actions>({
  el: "#app",
  state,
  view,
  actions,
});
