import Navbar from "@/components/navbar";
import React from "react";

const Contact = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <React.Fragment>
        <div className="contact">
          <h1>This is my contact page</h1>
        </div>
      </React.Fragment>
    </div>
  );
};

export default Contact;
