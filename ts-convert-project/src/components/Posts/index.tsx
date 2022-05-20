import { usePosts } from "../../hooks/usePosts";
import { Post, User } from "../../types";
import Accordion from "../Accordion";
import List from "../List";

type Props = { user: User };
type PostPartial = Omit<Post, "userId">;

const Posts = ({ user }: Props) => {
  const { data: postDictionary = {} } = usePosts();

  const renderPosts = (post: PostPartial) => (
    <div>
      {post.title}
      <strong>{post.body}</strong>
    </div>
  );
  return (
    <Accordion title="Posts">
      <List
        data={postDictionary[user.id]}
        listHeader="Posts"
        keyExtractor={({ id }) => id.toString()}
        renderItem={(post) => renderPosts(post)}
      />
    </Accordion>
  );
};

export default Posts;
