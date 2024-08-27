import React from 'react';
import ImageCard from '../ImageCard/ImageCard'; // Шлях до ImageCard
import s from './ImageGallery.module.css';

const ImageGallery = ({ items, onImageClick }) => {
  return (
    <ul className={s.gallery}>
      {items.map((image) => (
        <li key={image.id} className={s.galleryItem}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
