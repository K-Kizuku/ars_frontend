export type ActionType<State> = (state: State, ...data: any) => void | any;

export type ActionTree<State> = {
  [action: string]: ActionType<State>;
};
