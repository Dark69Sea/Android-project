import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import { useState } from "react";
import CreateTodo from "../components/CreateTodo";
import TodoItem from "../components/TodoItem";
import { getTodos, Todo } from "../data/todos";
import "./Home.css";

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getTodos();
    setTodos(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };
  
  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inbox</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Inbox</IonTitle>
          </IonToolbar>
        </IonHeader>

        <CreateTodo
          onCreate={(newTodoTitle) =>
            setTodos([
              ...todos,
              {
                id: todos.length + 1,
                title: newTodoTitle,
                isCompleted: false,
              },
            ])
          }
        />
        <IonList>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onChange={(newValue) => {
                setTodos(
                  todos.map((t) =>
                    t.id === todo.id ? { ...t, isCompleted: newValue } : t
                  )
                );
              }}
              onDelete={(todoId)=>{
                setTodos(todos.filter(t=>t.id !== todoId))
              }}
            />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
