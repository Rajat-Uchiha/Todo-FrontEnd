import React from "react";
import { useCookies } from "react-cookie";
import Login from "./Login";
import Allnotes from "./Allnotes";

const Notes = () => {
  const [cookie] = useCookies(["access_token"]);
  
  if (!cookie.access_token) {
    return <Login />;
  } else {
    return <Allnotes />;
  }
};

export default Notes;
