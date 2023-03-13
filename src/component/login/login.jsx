import React from "react";
import { useState } from "react";
import "./login.css";

const LoginPage = () => {
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
    } else if (!password) {
      setError("Password is required");
    } else {
      fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");

          if ((data.status = 400)) {
            setError("Incorrect credentials");
          }
          if ((data.status = 201)) {
            alert("login successful");
            window.localStorage.setItem("token", data.token);

            window.location.href = "/home";
          }
        });
    }
  };

  return (
    <div className="main-container-login">
      <div className="adminlogin-box-container">
        <form onSubmit={handleSubmit}>
          <h3 className="title-login">Log In</h3>

          <div>
            <label className="label-login">Email address:</label>
            <input
              className="input-login"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />
          </div>

          <div>
            <label className="label-login">Password:</label>
            <input
              className="input-login"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button className="button-login" type="submit">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
