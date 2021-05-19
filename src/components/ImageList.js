import React from 'react';

const ImageList = ({
  images
}) => {
  const displayImages = images.map(({id, alt_description, urls}) => {
    return (
      <div key={id}>
        <img alt={alt_description} src={urls.regular} />
      </div>
      )
    })

  return (
    <div>
      Image List:
      {displayImages}
    </div>
  )
}
export default ImageList;