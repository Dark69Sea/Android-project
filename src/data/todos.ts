export interface Todo {
  title: string;
  isCompleted: boolean;
  id: number;
}

const todos: Todo[] = [
  {
    title: "Finish the android project",
    isCompleted: true,
    id: 0,
  },
  {
    title: "Learn Capacitor",
    isCompleted: true,
    id: 1,
  },
  {
    title: "Learn JavaScript",
    isCompleted: true,
    id: 2,
  },
  {
    title: "Study for exams",
    isCompleted: true,
    id: 3,
  },
];

export const getTodos = () => todos;
