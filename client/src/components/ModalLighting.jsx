import React from 'react';

const Lighting = ({ lightMode, changeLighting }) => {
  return (
    <div className="lighting">
      {lightMode
        ? <img alt="http://d13grdp3a2v9nw.cloudfront.net/loading.png" id="lightbulb" src="https://s3-us-west-1.amazonaws.com/fec-errbnb/lightbulb_on.png" onClick={changeLighting} />
        : <img alt="http://d13grdp3a2v9nw.cloudfront.net/loading.png" id="lightbulb" src="https://s3-us-west-1.amazonaws.com/fec-errbnb/lightbulb.png" onClick={changeLighting} />
      }
    </div>
  )
}

export default Lighting;