import React from "react";

interface InputCProps {
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  icon?: string;
  alt?: string;
}
const InputC: React.FC<InputCProps> = ({ props, icon, alt }) => {
  return (
    <div className="input">
      <img src={icon} alt={alt} />
      <input {...props} />
    </div>
  );
};

export default InputC;
