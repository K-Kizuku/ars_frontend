import { createVElement } from "../core";
// import { Factory } from "./factory";
import { ActionTree } from "../core";

type State = {
  [state: string]: any;
};
const state: State = {};

const actions: ActionTree<State> = {};
type GlobalFactoryProps = {
  allAction: ActionTree<State>[];
  allState: State[];
  state: {
    [stateId: string]: {
      value: any;
      action: ActionTree<State>;
      state: State;
    };
  };
};

/**
 * グローバルな状態管理のための変数
 */
export var __GLOBAL_FACTORY__: GlobalFactoryProps = {
  allAction: [{}],
  allState: [{}],
  state: {},
};

export const setGlobalFactory = <T>(id: string, value: T) => {
  __GLOBAL_FACTORY__.state[id].value = value;
};

export const FactoryRoot = () => {
  return createVElement("div", { id: "" });
};
