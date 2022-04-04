import { useQuery } from "react-query";
import { User } from "../../types";
import { handleError } from "../../utils";

export const useUsers = () =>
  useQuery<User[], Error | Response>("users", () =>
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => users)
      .catch((error) => handleError(error))
  );
