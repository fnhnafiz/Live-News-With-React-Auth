import React from "react";
import Header from "../Components/Header";
import RigthSidebar from "../Components/RigthSidebar";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="container mx-auto grid md:grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="font-semibold">Dragon News</h2>
          {/* card */}
          <div className="card card-compact shadow-xl py-5 space-y-5">
            <figure>
              <img src={news?.image_url} alt="Shoes" />
            </figure>
            <div className="card-body space-y-3">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link
                  to={`/category/${news?.category_id}`}
                  className="btn btn-primary"
                >
                  All news in this category
                </Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RigthSidebar></RigthSidebar>
        </aside>
      </main>
    </div>
  );
};

export default News;
