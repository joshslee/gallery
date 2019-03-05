import React from 'react';

const ModalDescription = ( {currentIndex, photos, photosLength, showOrHideList, showCarousel } ) => {
  return (
    <div className="description">
      <p className="caption">{`${currentIndex + 1}/${photosLength}: ${photos[currentIndex].caption}`}</p>
      <p className="showList" onClick={showOrHideList}>{showCarousel ? 'hide photo list' : 'show photo list'}</p>
    </div>
  )
}

export default ModalDescription;