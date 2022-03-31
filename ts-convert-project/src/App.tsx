import { useEffect, useState } from "react";
import List from "./components/List";
import { Todo, User } from "./types";
import "./App.css";
import Accordion from "./components/Accordion";
import { handleError } from "./utils";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users))
      .catch((error) => handleError(error));
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((todos) => setTodos(todos))
      .catch((error) => handleError(error));
  }, []);

  const renderUser = (user: User) => (
    <div>
      <h3>{user.name}</h3>
      <Accordion title="Todos">
        <List
          data={todos.filter((todo) => todo.userId === user.id)}
          listHeader="Todos"
          keyExtractor={({ id }) => id.toString()}
          renderItem={(todo) => renderTodos(todo)}
        />
      </Accordion>
    </div>
  );
  const renderTodos = (todo: Todo) => (
    <div>
      {`${todo.title} - status: `}
      <strong>{todo.completed ? "completed" : "in progess"}</strong>
    </div>
  );

  return (
    <div className="listContainer">
      <List
        data={users}
        keyExtractor={({ id }) => id.toString()}
        renderItem={renderUser}
      />
    </div>
  );
}

export default App;

