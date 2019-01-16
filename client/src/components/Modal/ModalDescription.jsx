import React from 'react';

const ModalDescription = ( {displayIndex, photos, photosLength, showOrHideList, showList} ) => {
  return (
    <div className="description">
      <p className="caption">{`${displayIndex + 1}/${photosLength + 1}: ${photos[displayIndex].caption}`}</p>
      <p className="showList" onClick={showOrHideList}>{showList ? 'hide photo list' : 'show photo list'}</p>
    </div>
  )
}

export default ModalDescription;