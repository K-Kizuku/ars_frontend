type Task = string;
type Form = {
  /** タスクのタイトル */
  title: string;
  /** バリデーション結果 */
  hasError: boolean;
};
export type State = {
  /** タスク一覧 */
  tasks: Task[];
  /** フォームの状態 */
  form: Form;
};
export const state: State = {
  tasks: ["Learn about Virtual DOM", "Write a document"],
  form: {
    title: "",
    hasError: false,
  },
};
