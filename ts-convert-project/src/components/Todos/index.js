import React from "react";
import { useTodos } from "../../hooks/useTodos";
import Accordion from "../Accordion";
import List from "../List";

// Props for todos

const Todos = ({ user }) => {
  const { data: todos = [] } = useTodos();

  const renderTodos = (todo) => (
    <div>
      {`${todo.title} - status: `}
      <strong>{todo.completed ? "completed" : "in progess"}</strong>
    </div>
  );
  return (
    <Accordion title="Todos">
      <List
        data={todos.filter((todo) => todo.userId === user.id)}
        listHeader="Todos"
        keyExtractor={({ id }) => id.toString()}
        renderItem={(todo) => renderTodos(todo)}
      />
    </Accordion>
  );
};

export default Todos;
