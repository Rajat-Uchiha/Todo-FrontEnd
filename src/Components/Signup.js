import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/signup", {
        username,
        password,
      });
      alert("User registered Successfully!");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h1 className="text-6xl font-bold text-gray-700 font-Delicious mt-6 text-center animate-bounce  ">
        Register
      </h1>
      <section className="min-h-screen flex justify-center items-start py-10 ">
        <form
          className=" flex flex-col w-3/4 lg:w-1/4 p-10 shadow-2xl rounded-md "
          onSubmit={register}
        >
          <label
            className="font-Delicious text-4xl text-gray-700 py-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="border-2 border-gray-500 py-2 px-1 rounded-md text-2xl font-Delicious text-gray-700 "
            type="text"
          />

          <label
            className="font-Delicious text-4xl text-gray-700 py-2"
            htmlFor="Password"
          >
            Password
          </label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border-2 border-gray-500 py-2 px-1 rounded-md text-2xl font-Delicious text-gray-700 "
            type="password"
            name="password"
            id="password"
          />
          <button
            type="submit"
            className="border-2 border-white rounded-md py-2 my-5 text-3xl bg-blue-600 text-gray-100 font-Delicious"
          >
            Signup
          </button>
        </form>
      </section>
    </>
  );
};

export default Signup;
