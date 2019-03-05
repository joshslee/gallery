import React from 'react';
import ModalCarouselEntry from './ModalCarouselEntry.jsx';

const ModalCarousel = ({ photos, showCarousel, renderAsMainImage, currentIndex }) => {
  return (
    <div className="photo-carousel" id={showCarousel ? 'showCarousel' : null}>
      {photos.map((photo, index) => 
        <ModalCarouselEntry 
          photo={photo} 
          key={index} 
          index={index} 
          renderAsMainImage={renderAsMainImage} 
          currentIndex={currentIndex} 
        />)}
    </div>
  )
}

export default ModalCarousel;