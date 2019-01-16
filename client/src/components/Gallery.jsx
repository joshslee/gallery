import React from 'react';
import LoadingPhotos from './LoadingPhotos.jsx';
import PhotoFrame from './PhotoFrame.jsx';
import ViewMore from './ViewMore.jsx';
import Modal from './Modal/Index.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: LoadingPhotos, 
      roomID: null,
      clickIndex: null,
      showGallery: false
    };
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  componentDidMount() {
    this.getRoomID();
  }

  getRoomID() {
    const url = window.location.href.split('/');
    let roomID = url[url.indexOf('rooms')] === undefined ? 0 : url[url.indexOf('rooms') + 1];
    this.setState({roomID}, () => {
      this.fetchPhotos();
    });
  }

  fetchPhotos() {
    fetch(`/rooms/${this.state.roomID}/photos`)
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        this.setState({photos: body.photo});
      });
  }

  toggleGallery(e) {
    e.preventDefault();
    let photoID = e.target.id;
    if (photoID !== null) {
      let index = Number(photoID.substring(photoID.length - 1));
      this.setState({clickIndex: index}); //starts the Modal with the clicked photo as the main display
    }
    this.setState({showGallery: !this.state.showGallery}); // turns on and off the display 
  }

  render() {
    const {photos, clickIndex, showGallery} = this.state;

    return (
      <div className="body" >
        <div className="photoDisplay">
          <div id="col-1">
            <PhotoFrame photo={photos[0].url} index={0} toggleGallery={this.toggleGallery}/>
            <ViewMore toggleGallery={this.toggleGallery} />
          </div>
          <div id="col-2">
            <PhotoFrame photo={photos[1].url} index={1} toggleGallery={this.toggleGallery}/>
            <PhotoFrame photo={photos[2].url} index={2} toggleGallery={this.toggleGallery}/>
          </div>
          <div id="col-3">
            <PhotoFrame photo={photos[3].url} index={3} toggleGallery={this.toggleGallery}/>
            <PhotoFrame photo={photos[4].url} index={4} toggleGallery={this.toggleGallery}/>
          </div>
        </div>
        {showGallery && (<Modal photos={photos} toggleGallery={this.toggleGallery} clickIndex={clickIndex} showGallery={showGallery}/>)}
      </div>
    );
  }

}

export default Gallery;