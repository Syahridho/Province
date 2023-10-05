import React, { Component } from "react";
import CardList from "../components/CardList";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const viewHandle = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <>
      <h1 className="font-semibold text-3xl text-center my-10 tracking-wide">
        TRAVEL
      </h1>
      <div className="container mx-auto px-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <CardList onView={(id) => viewHandle(id)} />
      </div>
    </>
  );
};
export default Home;
