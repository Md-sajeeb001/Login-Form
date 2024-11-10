import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebaseINIT.JS";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CreateAccont = () => {
  const [showError, setShowError] = useState("");
  const [success, setSuccess] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handelCreateSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log( email, password);

    // rest state
    setShowError("");
    setSuccess(false);

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        setSuccess(true);
      })
      .catch((error) => {
        console.log("ERROR", error.message);
        setShowError(error.message);
      });
  };

  const handelShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero bg-base-200 mt-10 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sing up now!</h1>
          <p className="py-6">
            If Your New In The Web Site Plaese Creacte Your New Account.
          </p>
          {showError && <p className="text-rose-500">{showError}</p>}
          {success && <p className="text-green-500">Sing in successful</p>}
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handelCreateSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                required
              />
              <div
                onClick={handelShowPassword}
                className="absolute right-4 top-14"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sing up</button>
            </div>
          </form>
        <p className="py-4 text-center">Already Have an Account ? please <Link to="/Login">Log in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccont;