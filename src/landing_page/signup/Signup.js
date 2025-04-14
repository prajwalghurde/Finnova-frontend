import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const { data } = await axios.post("/signup", inputValue, { withCredentials: true });

      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("Something went wrong. Please try again.");
    }

    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1>Finnova</h1>
        <p>Open an account with us to start trading.</p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "400px" }}>
        <div className="form-group mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            className="form-control"
            placeholder="Enter your email"
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            className="form-control"
            placeholder="Enter your username"
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            className="form-control"
            placeholder="Enter your password"
            onChange={handleOnChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Signup
        </button>
        <div className="mt-3 text-center">
          <p>Already have an account?</p>
          <Link to="/login" className="btn btn-secondary">Login</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
