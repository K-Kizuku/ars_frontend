export type NodeType = VNode | string | number;
export type Attributes = { [key: string]: string | Function };

export type View<State, Actions> = {
  (state: State, actions: Actions): VNode;
};

/**
 * 仮想DOM
 */
export type VNode = {
  // WARNING: ElementTagNameMapとの互換性の確認
  nodeName: keyof HTMLElementTagNameMap;
  attributes: Attributes;
  children: NodeType[];
};
