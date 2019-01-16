import React from 'react';

const ModalCarouselEntry = ({ photo, index, projectAsDisplay, displayIndex }) => {
  let { url } = photo;
  return (
    <div className="photoFrame">
      <img className={index === displayIndex ? "photoEntryFocus" : "photoEntry"} id={index} src={url} alt="http://d13grdp3a2v9nw.cloudfront.net/loading.png" onClick={projectAsDisplay}/>
    </div>
  )
};

export default ModalCarouselEntry;