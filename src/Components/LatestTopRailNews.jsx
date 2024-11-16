import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestTopRailNews = () => {
  return (
    <div className="flex items-center gap-3">
      <p className="bg-red-700 text-white px-6 py-2">Latest</p>

      <Marquee pauseOnHover={true} speed={100} className="space-x-5">
        <Link to="news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          reiciendis vitae? Distinctio suscipit possimus quis magnam nemo!
          Voluptas, nisi impedit.
        </Link>
        <Link to="news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          reiciendis vitae? Distinctio suscipit possimus quis magnam nemo!
          Voluptas, nisi impedit.
        </Link>
        <Link to="news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          reiciendis vitae? Distinctio suscipit possimus quis magnam nemo!
          Voluptas, nisi impedit.
        </Link>
        <Link to="news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          reiciendis vitae? Distinctio suscipit possimus quis magnam nemo!
          Voluptas, nisi impedit.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestTopRailNews;
