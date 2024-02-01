import { Route, Routes } from "react-router-dom";
import { Countries } from "./Countries";

export const CountriesRoutes = () => {
  return <Routes>
    <Route path="" element={<Countries />} />
  </Routes>;
};
