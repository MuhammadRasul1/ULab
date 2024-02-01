import { useQuery } from "react-query";
import request from "services/httpRequest";


const usersServices = { getUsers: () => request.get("/users").then(res => res.data), };

export const useGetUsers = (settings) => {
  return useQuery("GET/USERS", usersServices.getUsers, settings);
};
