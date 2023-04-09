import React from "react";
import { useQuery } from "react-query";
import { fetchUsers } from "../api/posts";
import { Link } from "react-router-dom";
import UserForm from "../components/UserForm";
import Button from "../components/Button";

const UsersPage = () => {
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
    <section className="flex flex-col gap-3">
      <Link to='create-user'>
        <Button>Create User</Button>
      </Link>
      <div className="flex flex-col gap-1">
        {users.map((user) => {
          return (
            <Link key={user.id} to={`users/${user.id}`} className="text-xl">
              {user.name}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default UsersPage;
