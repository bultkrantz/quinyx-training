import { useQuery } from "react-query";
import { Todo } from "../../types";
import { handleError } from "../../utils";

export const useTodos = () =>
  useQuery<Todo[], Error | Response>("todos", () =>
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((todos) => todos)
      .catch((error) => handleError(error))
  );
