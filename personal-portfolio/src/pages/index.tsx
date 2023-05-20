// Home
import Navbar from "@/components/navbar";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      {/* Navbar */}
      <Navbar />

      <div className="home">
        <h1>This is Home page</h1>
      </div>
    </React.Fragment>
  );
};

export default Home;
