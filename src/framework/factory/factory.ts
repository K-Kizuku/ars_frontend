// import { setGlobalFactory, __GLOBAL_FACTORY__ } from "./globalFactory";
import { ActionTree } from "../core/action";
// import { __ACTION__, __STATE__ } from "../life/render";

// type State = {
//   [state: string]: any;
// };
// const state: State = {};

// const actions: ActionTree<State> = {};

export type FactoryProps<State, Action> = {
  state: State;
  action: Action;
};
export class Factory<State, Action extends ActionTree<State>> {
  protected state: State;
  protected action: Action;

  constructor(params?: FactoryProps<State, Action>) {
    this.state = params.state;
    this.action = params.action;
    //   this.addAction(this.action);
  }
  public getState() {
    // __GLOBAL_FACTORY__["state"][this.id];
    return this.state;
  }
  public setState(value) {
    this.state = value;
    return;
  }
  public appSetting(): [State, Action] {
    return [this.state, this.action];
  }
  public getAction() {
    return this.action;
  }
  public setAction(action) {
    this.action = action;
    return;
  }
}
// // var __FACTORY__ = new Factory({ id: "admin" });
// // const getAllFactory = () => {
// //   __GLOBAL_FACTORY__;
// //   return [__FACTORY__];
// // };

// export const createScreen = () => {};

// export const stateFactory = <State>(): State => {
//   return __STATE__;
// };

// export const actionFactory = <Actions>(): Actions => {
//   return __ACTION__;
// };
