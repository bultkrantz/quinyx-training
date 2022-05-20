import { usePosts } from "../../hooks/usePosts";
import Accordion from "../Accordion";
import List from "../List";

// Props for posts

// Create a "partial" type for post here (multiple ways possible, use the one most accurate to you)

const Posts = ({ user }) => {
  const { data: postDictionary = {} } = usePosts();

  const renderPosts = (post) => (
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
