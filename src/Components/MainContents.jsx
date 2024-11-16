import { useLoaderData } from "react-router-dom";
import NewsChapter from "./NewsChapter";

const MainContents = () => {
  const { data } = useLoaderData();

  return (
    <div>
      <h2 className="font-bold text-lg">Dragon News Home : ({data.length})</h2>
      {data.map((newsChapter, index) => {
        return <NewsChapter key={index} news={newsChapter}></NewsChapter>;
      })}
    </div>
  );
};

export default MainContents;
