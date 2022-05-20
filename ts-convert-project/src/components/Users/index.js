import React, { Suspense } from "react";
import { useUsers } from "../../hooks/useUsers";
import List from "../List";
import Posts from "../Posts";
import Todos from "../Todos";

const Users = () => {
  const { data: users = [] } = useUsers();

  const renderUser = (user) => (
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
