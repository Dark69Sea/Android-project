import { IonButton, IonInput } from "@ionic/react";
import { useCallback, useState } from "react";
import "./CreateTodo.css";

export interface CreateTodoInterface {
  onCreate: (newTodoTitle: string) => any;
}

const CreateTodo: React.FC<CreateTodoInterface> = ({ onCreate }) => {
  const [value, setValue] = useState("");

  const handleCreate = useCallback(() => {
    if (value.length <= 0) return;
    onCreate(value);
    setValue("");
  }, [value, onCreate]);

  return (
    <div className="create-todo-container">
      <IonInput
        placeholder="Add a new todo item..."
        value={value}
        onIonChange={(e) => setValue(e.detail.value!)}
      />
      <IonButton onClick={handleCreate}>Add</IonButton>
    </div>
  );
};

export default CreateTodo;
