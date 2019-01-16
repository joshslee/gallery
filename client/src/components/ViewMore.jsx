import React from 'react';

const ViewMore = ({ toggleGallery }) => {
  return (
    <div className="center" id="viewPhotosBtn" onClick={toggleGallery}>
      <a>View More</a>
    </div>
  )
}

export default ViewMore;