import Input from "./Input";
import Button from "./Button";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { createUser } from "../api/posts";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [inputValue, setInputValue] = useState("");
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading, mutate, error } = useMutation({
    mutationFn: createUser,
    onSuccess: (newUser) => {
      queryClient.setQueryData(["users", newUser.id.toString()], newUser);
      navigate("/users/" + newUser.id);
      console.log(newUser);
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    mutate(inputValue);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 items-start">
      <Input
        onChange={({ target: { value } }) =>
          setInputValue({ ...inputValue, name: value })
        }
        className="w-full"
        type="text"
        label="name"
      />
      <Input
        onChange={({ target: { value } }) =>
          setInputValue({ ...inputValue, email: value })
        }
        className="w-full"
        type="text"
        label="email"
      />
      <Button loading={isLoading}>submit</Button>
    </form>
  );
};

export default UserForm;
