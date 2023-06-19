import React from "react";

interface ButtonCProps {
  children: any;
  onClick: any;
}
const ButtonC: React.FC<ButtonCProps> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="btn">
      <h3 className="btn--name">{children}</h3>
    </div>
  );
};

export default ButtonC;
