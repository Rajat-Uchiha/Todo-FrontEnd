import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";
import Cookies from "js-cookie";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const [token, setCookie] = useCookies(["access_token"]);
  // const [userid, setUserId] = useCookies(["userId"]);

  const login = async (e) => {
    e.preventDefault();
    try {
      //*We get a token in response save that token in the cookies to authenticate the user.
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });
      alert("User Logged in Successfully!");

      //*Save the token in cookies.
      // setCookie("access_token", response.data.token);
      // setUserId("userId", response.data.userID);

      Cookies.set("access_token", response.data.token);
      Cookies.set("userId", response.data.userID);

      //* save the user id in local storage to keep the user logged in even if the user reloads;
      window.localStorage.setItem("userID", response.data.userID);

      window.localStorage.setItem("username", username);

      //*After logging in , redirect user to the notes page
      navigate("/notes");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h1 className="text-6xl font-bold text-gray-700 font-Delicious mt-6 text-center animate-bounce  ">
        Login
      </h1>
      <section className="min-h-screen flex justify-center items-start  py-10">
        <form
          className=" flex flex-col w-1/2 lg:w-1/4 p-10 shadow-2xl rounded-md "
          onSubmit={login}
        >
          <label
            className="font-Delicious text-4xl text-gray-700 py-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="border-2  border-gray-500 py-2 px-1 rounded-md text-2xl font-Delicious text-gray-700 "
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label
            className="font-Delicious text-4xl text-gray-700 py-2"
            htmlFor="Password"
          >
            Password
          </label>
          <input
            className="border-2 border-gray-500 py-2 px-1 rounded-md text-2xl font-Delicious text-gray-700 "
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="border-2 border-white rounded-md py-2 my-5 text-3xl bg-blue-600 text-gray-100 font-Delicious">
            Login
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;
