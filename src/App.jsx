import React from "react";
import { useQuery } from "react-query";
import { fetchUsers } from "./api/posts";

const App = () => {
  const {
    isLoading,
    data: users,
    error,
  } = useQuery("users", fetchUsers, {
    retry: 0,
  });

  if (error) return <p>{error}</p>;
  if (isLoading) return <p>loading...</p>;

  return (
    <div className="text-2xl">
      {users?.map((user) => {
        return <p key={user.id}>{user.name}</p>;
      })}
    </div>
  );
};

export default App;
