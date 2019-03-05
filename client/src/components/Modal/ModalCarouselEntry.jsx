import React from 'react';

const ModalCarouselEntry = ({ photo, index, renderAsMainImage, currentIndex }) => {
  let { url } = photo;
  return (
    <div className="photoFrame">
      <img className={index === currentIndex ? "photoEntryFocus" : "photoEntry"} 
        id={index} 
        src={url} 
        alt="http://d13grdp3a2v9nw.cloudfront.net/loading.png" 
        onClick={renderAsMainImage}
      />
    </div>
  )
};

export default ModalCarouselEntry;