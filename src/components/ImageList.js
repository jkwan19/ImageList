import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = ({
  images
}) => {
  const displayImages = images.map(image => {
    return (
        <ImageCard
          key={image.id}
          image={image}
        />
      )
    })

  return (
    <div className="image-list">
      {displayImages}
    </div>
  )
}
export default ImageList;