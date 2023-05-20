import Navbar from "@/components/navbar";
import React from "react";

const About = () => {
  return (
    <React.Fragment>
      {/* Navbar */}
      <Navbar />

      <div className="about">
        <h1>This is my about page</h1>
      </div>
    </React.Fragment>
  );
};

export default About;
