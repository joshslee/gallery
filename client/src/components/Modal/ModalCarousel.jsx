import React from 'react';
import ModalCarouselEntry from './ModalCarouselEntry.jsx';

const ModalCarousel = ({ photos, showCarousel, renderAsMainImage, displayIndex }) => {
  return (
    <div className="photo-carousel" id={showCarousel ? 'showCarousel' : null}>
      {photos.map((photo, index) => <ModalCarouselEntry photo={photo} key={index} index={index} renderAsMainImage={renderAsMainImage} displayIndex={displayIndex} />)}
    </div>
  )
}

export default ModalCarousel;