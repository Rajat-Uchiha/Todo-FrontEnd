import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const [Cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    window.localStorage.removeItem("username");
    navigate("/login");
  };

  console.log(props.userName);

  return (
    <nav className="w-full bg-blue-700 flex justify-start items-center">
      <ul className="flex justify-center font-Delicious lg:justify-start items-center mx-4 lg:mx-40 space-x-2 lg:space-x-6 my-4 ">
        <Link
          to="/"
          className="text-3xl text-gray-200 font-light hover:cursor-pointer hover:underline hover:underline-offset-4"
        >
          Home
        </Link>
        {!Cookies.access_token ? (
          <>
            <Link
              to="/signup"
              className="text-3xl text-gray-200 font-light hover:cursor-pointer hover:underline hover:underline-offset-4"
            >
              Signup
            </Link>
            <Link
              to="/login"
              className="text-3xl text-gray-200 font-light hover:cursor-pointer hover:underline hover:underline-offset-4"
            >
              Login
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/notes"
              className="text-3xl text-gray-200 font-light hover:cursor-pointer hover:underline hover:underline-offset-4"
            >
              Notes
            </Link>
            <h1 className="text-2xl lg:ml-40 font-Delicious text-gray-200 underline underline-offset-4">
              {props.userName}
            </h1>
            <button
              onClick={logout}
              className="text-2xl text-gray-200 font-light hover:cursor-pointer hover:underline hover:underline-offset-4"
            >
              Logout
            </button>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
