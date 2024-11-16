import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProviderContext } from "../ContextProvider/AuthProvider";

const Login = () => {
  const { loginUser, setUser } = useContext(AuthProviderContext);

  const [err, setErr] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    // console.log({ email, password });

    loginUser(email, password)
      .then((result) => {
        // console.log(result.user);
        setUser(result.user);

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // console.log("Error from Login", error);
        // alert(error.message);
        setErr({ ...err, login: error.code });
      });
  };
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 ">
        <h1 className="text-center pb-2 font-bold text-2xl">
          Login your account
        </h1>
        <form onSubmit={handleSubmit} className="card-body">
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              {err.login && (
                <p className="font-semibold text-red-600">Wrong Password</p>
              )}
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <p className="font-semibold text-center py-3">
          Dont’t Have An Account ? Please!!
          <Link to="/auth/register" className="text-red-500 font-bold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
