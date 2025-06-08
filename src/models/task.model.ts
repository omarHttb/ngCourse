export interface TaskInterface {
  id: string;
  userId: string;
  summary: string;
  title: string;
  dueDate: string;
}

export interface NewTaskData {
  title: string;
  summary: string;
  date: string;
}
