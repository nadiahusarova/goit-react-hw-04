import React from "react";
import s from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
  return (
    <li className={s.card}>
      <div onClick={() => onImageClick(image)}>
        <img src={image.urls.small} alt={image.alt_description || 'Image'} className={s.image} />
      </div>
    </li>
  );
};

export default ImageCard;
