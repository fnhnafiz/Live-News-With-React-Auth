import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CategoriesButton = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
    <div>
      <div>
        <h1 className="font-semibold">All Categories ({categories.length})</h1>
      </div>
      <div className="flex flex-col gap-2 py-3">
        {categories.map((category) => (
          <NavLink
            className="btn w-full"
            to={`/category/${category.category_id}`}
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoriesButton;
