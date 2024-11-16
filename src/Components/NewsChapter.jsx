import { FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsChapter = ({ news }) => {
  // console.log(news);

  return (
    <div className="card w-full  bg-white shadow-lg rounded-lg ">
      {/* Header */}
      <div className="flex items-center p-4">
        <img
          src={news.author.img}
          alt="Author"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="font-bold text-gray-800 text-sm">{news.author.name}</p>
          <p className="text-gray-500 text-xs">{news.author.published_date}</p>
        </div>
        <button className="ml-auto text-gray-500">
          <FaShareAlt />
        </button>
      </div>

      {/* Image */}
      <img
        src={news.thumbnail_url}
        alt="Thumbnail"
        className="w-full object-cover"
      />

      {/* Body */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {news.title}
        </h2>
        <p className="text-gray-600 text-sm">
          {news.details.slice(0, 100)}...
          <Link
            to={`/news/${news._id}`}
            className="text-blue-500 cursor-pointer"
          >
            Read More
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 pb-4">
        {/* Rating */}
        <div className="flex items-center text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < Math.round(news.rating.number)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="ml-2 text-gray-700 text-sm">
            {news.rating.number}
          </span>
        </div>

        {/* View Count */}
        <div className="flex items-center text-gray-500">
          <FaEye className="mr-1" /> {news.total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsChapter;
