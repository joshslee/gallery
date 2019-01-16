import React from 'react';
import ModalCarouselEntry from './ModalCarouselEntry.jsx';

const ModalCarousel = ({ photos, showCarousel, projectAsDisplay, displayIndex }) => {
  return (
    <div className="photo-carousel" id={showCarousel ? 'showCarousel' : null}>
      {photos.map((photo, index) => <ModalCarouselEntry photo={photo} key={index} index={index} projectAsDisplay={projectAsDisplay} displayIndex={displayIndex} />)}
    </div>
  )
}

export default ModalCarousel;