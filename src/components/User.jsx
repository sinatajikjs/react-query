import React from "react";
import { useQuery } from "react-query";
import { useSearchParams, useParams } from "react-router-dom";
import { fetchOneUser } from "../api/posts";

const User = () => {
  const { userId } = useParams();

  const {
    isLoading,
    data: user,
    error,
  } = useQuery(["users", userId], (e) => fetchOneUser(userId), {
    retry: 0,
  });

  if (error) return <p>{error}</p>;
  if (isLoading) return <p>loading...</p>;

  return (
    <div>
      <h1>name: {user.name}</h1>
      <h1>email: {user.email}</h1>
    </div>
  );
};

export default User;
