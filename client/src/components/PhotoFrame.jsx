import React from 'react';

const PhotoFrame = ({photo, index, toggleGallery}) => {
  return (
    <div className="photoDiv">
      <img alt="http://d13grdp3a2v9nw.cloudfront.net/loading.png" 
        className="photos" 
        id={`image${index}`} 
        src={photo} 
        onClick={() => toggleGallery(index)} />
    </div>
  )
}

export default PhotoFrame;