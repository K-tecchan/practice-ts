// const statuses = {
//   notStarted: 0,
//   inProgress: 1,
//   done: 2
// }

// ↑と本質的には一緒らしい。順番に0から番号振る感じ。番号とか文字列も自由に振ることもできる。
// interfaceと同じで後ろにpostfixとしてEnumってつけるといいらしい
enum StatusEnum {
  NotStarted,
  InProgress,
  Done,
}

interface Task {
  id: string;
  status: StatusEnum;
}

let notStartedStatus: StatusEnum = StatusEnum.NotStarted;

notStartedStatus = StatusEnum.Done;
