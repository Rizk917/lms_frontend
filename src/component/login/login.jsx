import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [error, setError] = useState("");

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Email) {
      setError("Email is required");
    } else if (!Password) {
      setError("Password is required");
    } else {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/login",
          { Email, Password }
        );
        console.log(response.data, "userRegister");

        if (response.status === 200) {
          toast.success("Successfully Logged in!");
          window.localStorage.setItem("token", response.data.token);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "/home";
        }
      } catch (error) {
        console.log(error.response.data);
        setError("Incorrect credentials");
      }
    }
  };

  return (<>
    <div className="main-container-login">
  <ToastContainer/>
      
      <div className="adminlogin-box-container">
        <form onSubmit={handleSubmit}>
          <h3 className="title-login">Log In</h3>

          <div>
            <label className="label-login">Email address:</label>
            <input
              className="input-login"
              type="email"
              placeholder="Enter your Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="label-login">Password:</label>
            <input
              className="input-login"
              type="password"
              placeholder="Enter your Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button className="button-login" type="submit">
              Log In
            </button>
          </div>
        </form>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
    </>
  );

  
};

export default LoginPage;
