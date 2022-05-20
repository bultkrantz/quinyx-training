import { useQuery } from "react-query";
import { handleError } from "../../utils";

export const useTodos = () =>
  // useQuery needs to be types here: useQuery<ReturnType, ErrorType> tip: error can be union type
  useQuery("todos", () =>
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((todos) => todos)
      .catch((error) => handleError(error))
  );
