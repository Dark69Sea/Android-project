export interface Todo {
  title: string;
  isCompleted: boolean;
  id: number;
}

const todos: Todo[] = [
  {
    title: "ساخت پروژه برنامه نویسی موبایل",
    isCompleted: true,
    id: 0,
  },
  {
    title: "ورزش صبحگاهی",
    isCompleted: true,
    id: 1,
  },
  {
    title: "شرکت در مهمانی",
    isCompleted: false,
    id: 2,
  },
  {
    title: "انجام تکالیف دانشگاه",
    isCompleted: true,
    id: 3,
  },
];

export const getTodos = () => todos;
