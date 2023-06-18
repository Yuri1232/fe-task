import React from "react";
import Header from "../components/Header";
import ReferCard from "../components/ReferCard";
import { data } from "../data/Mockdata";
import Step from "../components/Step";
import Store from "../components/store";
import Footer from "../components/Footer";

function Main() {
  return (
    <div className="app">
      <Header />;
      <div className="app__body_wrapper">
        <ReferCard />
        <div className="app__body_wrapper--steps">
          {data.map((data, key) => (
            <Step
              key={key}
              stepNum={data.stepNum}
              title={data.title}
              description={data.description}
              img={data.image}
            />
          ))}
        </div>
      </div>
      <Store />
      <Footer />
    </div>
  );
}

export default Main;
