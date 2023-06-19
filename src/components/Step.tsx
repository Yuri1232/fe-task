import React from "react";
interface StepProps {
  stepNum: string;
  title: string;
  description: string;
  img: string;
}
const Step: React.FC<StepProps> = ({ stepNum, title, description, img }) => {
  return (
    <div className="step">
      <img style={{ alignSelf: "center" }} src={img} alt="" />
      <div className="step__wrapper_text">
        <h3 className="step__num">{stepNum}</h3>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Step;
