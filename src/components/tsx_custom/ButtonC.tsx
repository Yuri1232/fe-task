import React from "react";

interface ButtonCProps {
  children: any;
}
const ButtonC: React.FC<ButtonCProps> = ({ children }) => {
  return (
    <div className="btn">
      <h3 className="btn--name">{children}</h3>
    </div>
  );
};

export default ButtonC;
