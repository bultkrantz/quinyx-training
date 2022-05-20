import { useQuery } from "react-query";
import { handleError } from "../../utils";

export const useUsers = () =>
  // useQuery needs to be types here: useQuery<ReturnType, ErrorType> tip: error can be union type
  useQuery("users", () =>
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => users)
      .catch((error) => handleError(error))
  );
