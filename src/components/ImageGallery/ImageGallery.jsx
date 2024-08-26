import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

const ImageGallery = ({ items, onImageClick }) => {
  return (
    <div className={s.gallery}>
      {items.map((image) => (
        <ImageCard key={image.id} image={image} onClick={() => onImageClick(image)} />
      ))}
    </div>
  );
};

export default ImageGallery;
