import React from 'react';
import LoadingPhotos from './LoadingPhotos.jsx';
import PhotoFrame from './PhotoFrame.jsx';
import ViewMore from './ViewMore.jsx';
import Modal from './Modal.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: LoadingPhotos, 
      roomID: null,
      clickIndex: null,
      showGallery: false
    };
  }

  componentDidMount() {
    this.getRoomID();
    this.fetchPhotos();
  }

  getRoomID() {
    const url = window.location.href.split('/');
    this.state.roomID = url[url.indexOf('rooms')] === undefined ? 0 : url[url.indexOf('rooms') + 1];
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
      this.setState({clickIndex: index});
    }
    this.setState({showGallery: !this.state.showGallery});
  }

  render() {
    const {photos, showGallery} = this.state;

    return (
      <div className="body" >
        <div className="photoDisplay">
          <div id="col-1">
            <PhotoFrame photo={photos[0].url} index={0} toggleGallery={this.toggleGallery.bind(this)}/>
            <ViewMore toggleGallery={this.toggleGallery.bind(this)} />
          </div>
          <div id="col-2">
            <PhotoFrame photo={photos[1].url} index={1} toggleGallery={this.toggleGallery.bind(this)}/>
            <PhotoFrame photo={photos[2].url} index={2} toggleGallery={this.toggleGallery.bind(this)}/>
          </div>
          <div id="col-3">
            <PhotoFrame photo={photos[3].url} index={3} toggleGallery={this.toggleGallery.bind(this)}/>
            <PhotoFrame photo={photos[4].url} index={4} toggleGallery={this.toggleGallery.bind(this)}/>
          </div>
        </div>
        {showGallery && (<Modal photos={photos} toggleGallery={this.toggleGallery.bind(this)} clickIndex={this.state.clickIndex} showGallery={this.state.showGallery}/>)}
      </div>
    );
  }

}

export default Gallery;