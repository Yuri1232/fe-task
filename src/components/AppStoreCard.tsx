import React from "react";

interface AppCardProps {
  icon: string;
  alt?: string;
  title: string;
  text: string;
  link?: string;
}
const AppCard: React.FC<AppCardProps> = ({ icon, alt, title, text, link }) => {
  return (
    <div className="appCard">
      <a
        style={{ position: "absolute", width: 300, height: 80 }}
        href={link}></a>
      <img src={icon} alt={alt} />
      <div className="appCard__col">
        <h3 className="appCard__col_title">{title}</h3>
        <p className="appCard__col_text">{text}</p>
      </div>
    </div>
  );
};

export default AppCard;
