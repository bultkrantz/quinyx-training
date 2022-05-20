import React, { Suspense } from "react";
import { usePosts } from "../../hooks/usePosts";
import { useUsers } from "../../hooks/useUsers";
import { User } from "../../types";
import List from "../List";
import Posts from "../Posts";
import Todos from "../Todos";

const Users = () => {
  const { data: users = [] } = useUsers();
  const { data } = usePosts();
  console.log("data", data);
  const renderUser = (user: User) => (
    <div>
      <h3>{user.name}</h3>
      <Suspense fallback="LOADING TODOS...">
        <Todos user={user} />
        <Posts user={user} />
      </Suspense>
    </div>
  );

  return (
    <List
      data={users}
      keyExtractor={({ id }) => id.toString()}
      renderItem={renderUser}
    />
  );
};

export default Users;
