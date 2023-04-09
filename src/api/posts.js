import axios from "axios";

export const fetchUsers = async () => {
  try {
    const res = await axios.get("http://localhost:7000/users");
    return res.data;
  } catch (error) {
    throw error.message;
  }
};

export const fetchOneUser = async (id) => {
  // try {
  //   const { data } = await axios.get("http://localhost:7000/users/" + id);
  //   return data;
  // } catch (err) {
  //   throw err;
  // }

  return new Promise((resolve) => {
    axios.get("http://localhost:7000/users/" + id).then((res) => {
      setTimeout(() => {
        resolve(res.data);
      }, 1000);
    });
  });
};

export const createUser = async (user) => {
  return new Promise((resolve) => {
    axios.post("http://localhost:7000/users", user).then((res) => {
      setTimeout(() => {
        resolve(res.data);
      }, 1000);
    });
  });
  try {
    const { data } = await axios.post("http://localhost:7000/users", user);
    return data;
  } catch (err) {
    throw err;
  }
};
