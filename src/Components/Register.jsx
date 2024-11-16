import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProviderContext } from "../ContextProvider/AuthProvider";

const Register = () => {
  const { handleRegister, setUser, updatedUserProfile } =
    useContext(AuthProviderContext);

  const [error, setError] = useState({});

  const navigate = useNavigate();
  const handleNewUser = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({
        ...error,
        name: "so small!! name more than 5 Charecters",
      });
      return;
    }
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    console.log({ name, email, photo, password });

    handleRegister(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        updatedUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/auth/login");
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        console.log("Error from Register", error);
        setUser("Eroor from Reg", error);
      });
  };
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0">
        <h1 className="text-center py-2 font-bold text-2xl">
          Register your account
        </h1>
        <form onSubmit={handleNewUser} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Type Your Name"
              className="input input-bordered"
              required
            />
          </div>
          {error.name && (
            <label className="label text-xs font-medium text-red-500">
              <p>{error.name}</p>
            </label>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo-url"
              className="input input-bordered"
              required
            />
          </div>
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
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="font-semibold text-center py-3">
          Already Have An Account! Please{" "}
          <Link to="/auth/login" className="text-green-500 font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
