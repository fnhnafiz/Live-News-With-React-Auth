import { Link, NavLink, useNavigate } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthProviderContext } from "../ContextProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthProviderContext);
  // const navigate = useNavigate();

  // const handleNavigate = () => {
  //   navigate("/auth/login");
  // };
  return (
    <div className="flex justify-between items-center">
      <div className="font-semibold">
        {" "}
        {(user && user?.name) || user?.email}
      </div>
      <div className="space-x-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-2 items-center">
        <div>
          {user && user?.email ? (
            <div className="flex gap-3 items-center">
              <p className="font-bold text-green-700">{user.displayName}</p>
              <img
                className="w-12 h-12 rounded-full object-cover ring-2 ring-green-600"
                src={user.photoURL}
                alt=""
              />
            </div>
          ) : (
            <div className="flex gap-3 items-center">
              <p className="font-bold text-red-700">No User</p>
              <img src={userIcon} alt="" />
            </div>
          )}
        </div>
        {user ? (
          <Link onClick={logOut} className="btn btn-neutral rounded-none">
            Sign-out
          </Link>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral rounded-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
