import React from 'react';
import LoadingPhotos from './LoadingPhotos.jsx';
import PhotoFrame from './PhotoFrame.jsx';
import ViewMore from './ViewMore.jsx';
import Modal from './Modal/Index.jsx';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: LoadingPhotos, 
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
    const roomID = url[url.indexOf('rooms') + 1];
    this.fetchPhotos(roomID);
  }

  fetchPhotos(roomID) {
    fetch(`/api/rooms/${roomID}/photos`)
      .then((response) => response.json())
      .then((photos) => this.setState({ photos }));
  }

  toggleGallery(clickIndex) {
    console.log(clickIndex);
    if (clickIndex !== null) {
      this.setState({
        clickIndex,
        showGallery: !this.state.showGallery
      });
    } else {
      this.setState({showGallery: !this.state.showGallery});
    }
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