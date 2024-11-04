import React from "react";

interface CardProps {
  title: string;
  description: string;
  type: string;
  image: string;
  icon;
}

export const UpdateCard: React.FC<CardProps> = ({
  title,
  description,
  image,
  icon,
  type,
}) => {
  return (
    <div className="update_card">
      <img className="img" src={image} alt={title} />

      <div className="overlay"></div>

      <div className="update_card_content">
        <h3>{title}</h3>
        <p>{type}</p>
        <div className="update_card_icon">{icon}</div>
      </div>

      <div className="hover-content">
        <h5 className="hover-content_type">{type}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};
