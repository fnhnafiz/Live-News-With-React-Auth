import { Outlet } from "react-router-dom";
import CategoriesButton from "../Components/CategoriesButton";
import Header from "../Components/Header";
import LatestTopRailNews from "../Components/LatestTopRailNews";

import Navbar from "../Components/Navbar";
import RigthSidebar from "../Components/RigthSidebar";

const MainHome = () => {
  return (
    <div className="font-poppins container mx-auto">
      <header>
        <Header></Header>
        <section className=" py-8">
          <LatestTopRailNews></LatestTopRailNews>
        </section>
        <nav className="py-4">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="grid md:grid-cols-12 gap-3">
        {/* left Section */}
        <section className="col-span-3">
          <CategoriesButton></CategoriesButton>
        </section>
        {/* Main Content Section */}
        <section className="col-span-6 overflow-y-scroll scrollbar-hide  h-[600px]">
          {/* <MainContents> */}
          <Outlet></Outlet>
          {/* </MainContents> */}
        </section>
        {/* Right Section */}
        <section className="col-span-3">
          <RigthSidebar></RigthSidebar>
        </section>
      </main>
    </div>
  );
};

export default MainHome;
