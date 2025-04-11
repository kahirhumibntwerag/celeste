import React from "react";
import Header from "../../components/Header";
import Category from "./Category";
const Categories = () => {
  return (
    <div className=" mx-10 mt-20">
      <div>
      <Header
        title="Categories"
        subtitle="A collection for every mood and style"
        buttonProps={{
          text: "View All",
          to: "/about",
          className: "bg-[#7d7d7d] rounded-3xl text-lg text-white",
          animated: true,
        }}
        direction="row"
        alignment="between"
        className="items-start md:items-center"
      />
        </div>  
      <div className="mt-10">
        <Category />
      </div>
    </div>
  );
};

export default Categories;
