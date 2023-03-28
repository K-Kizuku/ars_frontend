import { ActionTree } from "@/framework";
import { State } from "../states/states";
export interface Actions extends ActionTree<State> {
  /** タイトルの入力チェックを行う */
  validate: (state: State, title: string) => boolean;
  /** 新しいタスクを作成する */
  createTask: (state: State, title: string) => void;
  /** indexで指定したタスクを削除する */
  removeTask: (state: State, index: number) => void;
}
