import { useQuery } from "react-query";
import { handleError } from "../../utils";

// Create a "partial" type (multiple ways possible, use the one most accurate to you)

export const usePosts = () =>
  // useQuery needs to be types here: useQuery<ReturnType, ErrorType> tip: error can be union type
  // Use proper typing for this dictionary response. Any not allowed. Tip "utility types"
  useQuery("posts", () =>
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) =>
        posts.reduce(
          (
            // Type this without use of any, tip "utility types"
            result,
            { userId, ...post }
          ) => {
            if (!result[userId]) {
              result[userId] = [];
            }
            result[userId].push(post);
            return result;
          },
          {}
        )
      )
      .catch((error) => handleError(error))
  );
