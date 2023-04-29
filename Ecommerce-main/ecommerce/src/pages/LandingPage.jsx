import React from "react";
import Header from "../components/Header";
import Choice from "../components/Choice";
import Footer from "../components/Footer";
function LandingPage() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <Choice />
      <Footer/>
    </div>
  );
}

export default LandingPage;
