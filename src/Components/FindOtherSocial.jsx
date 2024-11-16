import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";

const FindOtherSocial = () => {
  return (
    <div className="my-5">
      <h1 className="font-semibold">Find Us On</h1>
      <div className="py-3">
        <div className="join flex join-vertical *:bg-white">
          <button className="btn join-item justify-start space-x-4">
            <FaFacebook className="text-blue-500"></FaFacebook>{" "}
            <h2>Facebook</h2>
          </button>
          <button className="btn join-item justify-start space-x-4">
            <FiInstagram className="text-orange-500"></FiInstagram>{" "}
            <h2>Instagram</h2>
          </button>
          <button className="btn join-item justify-start space-x-4">
            <FaTwitter className="text-sky-500"></FaTwitter> <h2>Twitter</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindOtherSocial;
