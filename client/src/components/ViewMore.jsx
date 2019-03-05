import React from 'react';

const ViewMore = ({ toggleGallery }) => {
  return (
    <div className="center" id="viewPhotosBtn" onClick={() => toggleGallery(0)}>
      <a>View More</a>
    </div>
  )
}

export default ViewMore;