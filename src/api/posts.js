import axios from "axios";

export const fetchUsers = async () => {
  try {
    const res = await axios.get("http://localhost:7000/users");
    return res.data;
  } catch (error) {
    throw error.message;
  }
};
