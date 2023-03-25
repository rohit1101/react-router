import axios from "axios";

export const profileInstance = axios.create({
  baseURL: "https://panorbit.in/api/users.json",
});
