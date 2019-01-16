import React from 'react';

const ModalDisplay = ({ previous, photos, displayIndex, next }) => {
  return (
    <div className="mainDisplay">
      <h1 className="btn" id="back" onClick={previous} value="back">{'<'}</h1>
      <img alt="http://d13grdp3a2v9nw.cloudfront.net/loading.png" id="leadImage" src={photos[displayIndex].url} onClick={next} />
      <h1 className="btn" id="forward" onClick={next} value="forward">{'>'}</h1>
    </div>
  )
}

export default ModalDisplay;