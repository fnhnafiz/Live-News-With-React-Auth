import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const SocialSignIn = () => {
  return (
    <div>
      <h2 className="font-semibold mb-2">Login With</h2>
      <div className="space-y-2">
        <button className="btn w-full">
          <FcGoogle /> Login With Google
        </button>
        <button className="btn w-full">
          <FaGithub /> Login With Facebook
        </button>
      </div>
    </div>
  );
};

export default SocialSignIn;
