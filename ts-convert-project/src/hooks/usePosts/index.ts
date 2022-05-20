import { useQuery } from "react-query";
import { Post } from "../../types";
import { handleError } from "../../utils";

// Create a "partial" type (multiple ways possible, use the one most accurate to you)
type PostPartial = Omit<Post, "userId">;

export const usePosts = () =>
  // Use proper typing for this dictionary response. Any not allowed.
  useQuery<Record<number, PostPartial[]>, Error | Response>("posts", () =>
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) =>
        posts.reduce(
          (
            // Type this without use of any
            result: Record<number, PostPartial[]>,
            { userId, ...post }: Post
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
