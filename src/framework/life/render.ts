// /**
//  * 状態管理用のグローバル変数
//  */
// export var __STATE__;

// /**
//  * アクション管理用のグローバル変数
//  */
// export var __ACTION__;

export const LifeRender = (
  params: { state; action },
  beforeFunc: () => void,
  afterFunc: () => void
) => {
  beforeRender(params, beforeFunc);
  afterRender(afterFunc);
};

export const beforeRender = (params: { state; action }, funcs: () => void) => {
  funcs();
};

const afterRender = (func: () => void) => {
  document.addEventListener("DOMContentLoaded", () => {
    func();
  });
};
