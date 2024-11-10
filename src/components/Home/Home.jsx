import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-96 mx-auto text-center space-y-4 py-10">
      <h2>
        if you are new to the website ! please{" "}
        <Link className="btn" to="/createAccount">sing up</Link>
      </h2>
      <h2>Already have an account <Link className="btn" to="/Login">Log in</Link></h2>
    </div>
  );
};

export default Home;
