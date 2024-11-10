import {
  GithubAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../firebaseINIT.JS";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [errrorMessage, setErrorMessage] = useState("");
  const [successUser, setSuccess] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const googleProvider = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider();

  const handelLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    // reset state!
    setErrorMessage("");
    setSuccess(false);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setSuccess(true);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setErrorMessage(error.message);
      });
  };

  const handelGoogleSubmit = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res);
        setSuccess(res.user);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  const handelGithubSubmit = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result);
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 mt-10 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Log in now!</h1>
          <p className="py-6">
            Already have an account Plaese Log in your Account.
          </p>
          {errrorMessage && <p className="text-red-500">{errrorMessage}</p>}
          {successUser && <p className="text-green-500">log in successfully</p>}

          <div className="space-y-6">
            <button
              onClick={handelGoogleSubmit}
              className="w-full btn rounded-full
             border-green-400 text-green-500"
            >
              Sing In Google
            </button>
            <button
              onClick={handelGithubSubmit}
              className="w-full btn rounded-full
             border-green-400 text-green-500"
            >
              Sing In Github
            </button>
          </div>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handelLoginSubmit} className="card-body">
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
                type={showPass ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button
                className="absolute right-8 top-14"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <FaEye /> : <FaEyeSlash />}
              </button>
              <div className="absolute right-4 top-14"></div>
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
          <p className="py-4 text-center">
            if your new in this website ? please
            <Link to="/createAccount">Sing up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
