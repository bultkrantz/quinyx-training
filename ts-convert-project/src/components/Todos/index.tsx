import React from "react";
import { useTodos } from "../../hooks/useTodos";
import { Todo, User } from "../../types";
import Accordion from "../Accordion";
import List from "../List";

type Props = { user: User };

const Todos = ({ user }: Props) => {
  const { data: todos = [] } = useTodos();

  const renderTodos = (todo: Todo) => (
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
