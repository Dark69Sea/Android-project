import { IonItem, IonLabel, IonNote } from "@ionic/react";
import { Todo } from "../data/todos";
import "./TodoItem.css";

interface TodoItemProps {
  todo: Todo;
  onChange: (isComplete: boolean) => any;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onChange }) => {
  return (
    <IonItem onClick={() => onChange(!todo.isCompleted)} detail={false}>
      <div
        slot="start"
        className={`dot ${
          todo.isCompleted ? "dot-completed" : "dot-in-progress"
        }`}
      ></div>
      <IonLabel className="ion-text-wrap">
        <h2 style={todo.isCompleted ? { textDecoration: "line-through" } : {}}>
          {todo.title}
          <span className="date">
            <IonNote>#{todo.id}</IonNote>
          </span>
        </h2>
        {/* <h3>{todo.subject}</h3> */}
      </IonLabel>
    </IonItem>
  );
};

export default TodoItem;
