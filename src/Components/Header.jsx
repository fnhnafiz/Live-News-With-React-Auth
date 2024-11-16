import moment from "moment";
import headerimg from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 py-3">
      <div>
        <img className="w-[470px]" src={headerimg} alt="" />
      </div>
      <p className="text-gray-400">Journalism Without Fear or Favour</p>
      <p>{moment().format("MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
