import React from "react";
import Header from "../components/Header";
import ReferCard from "../components/ReferCard";
import { data } from "../data/Mockdata";
import Step from "../components/Step";
import Store from "../components/store";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";

function Main() {
  const isMenuOpen: boolean = useSelector(
    (state: RootState) => state.menu.isMenuOpen
  );
  return (
    <div className="app">
      <Header />
      <div className={!isMenuOpen ? "background" : ""}>
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
    </div>
  );
}

export default Main;
