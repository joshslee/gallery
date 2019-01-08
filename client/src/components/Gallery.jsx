import React from 'react';
import ReactDOM from 'react-dom';
import PhotoDisplay from './PhotoDisplay.jsx';
import PhotoGallery from './PhotoGallery.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [
        {url:'http://d13grdp3a2v9nw.cloudfront.net/loading.png'},
        {url:'http://d13grdp3a2v9nw.cloudfront.net/loading.png'},
        {url:'http://d13grdp3a2v9nw.cloudfront.net/loading.png'},
        {url:'http://d13grdp3a2v9nw.cloudfront.net/loading.png'},
        {url:'http://d13grdp3a2v9nw.cloudfront.net/loading.png'}
      ], 
      id: null,
      showGallery: false,
      clickIndex: null
    };
  }

  componentDidMount() {
    let url = window.location.href.split('/');
    this.state.id = url[url.indexOf('rooms')] === undefined ? 0 : url[url.indexOf('rooms') + 1];
    this.fetchPhotos();
  }

  fetchPhotos() {
    fetch(`/rooms/${this.state.id}/photos`)
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        this.setState({photos: body.photo});
      });
  }

  toggleGallery(e) {
    e.preventDefault();
    let id = e.target.id;
    if (id !== null) {
      let index = Number(id.substring(id.length - 1));
      this.setState({clickIndex: index});
    }
    this.setState({showGallery: !this.state.showGallery});
  }


  render() {
    let {photos, showGallery} = this.state;

    return (
      <div className="body" >
        <div className="photoDisplay">
          <div id="col-1">
            <PhotoDisplay photo={photos[0].url} index={0} showGallery={showGallery} toggleGallery={this.toggleGallery.bind(this)}/>
            <div className="center" id="viewPhotosBtn" onClick={this.toggleGallery.bind(this)}>
              <a>View More</a>
            </div>
          </div>
          <div id="col-2">
            <PhotoDisplay photo={photos[1].url} index={1} showGallery={showGallery} toggleGallery={this.toggleGallery.bind(this)}/>
            <PhotoDisplay photo={photos[2].url} index={2} showGallery={showGallery} toggleGallery={this.toggleGallery.bind(this)}/>
          </div>
          <div id="col-3">
            <PhotoDisplay photo={photos[3].url} index={3} showGallery={showGallery} toggleGallery={this.toggleGallery.bind(this)}/>
            <PhotoDisplay photo={photos[4].url} index={4} showGallery={showGallery} toggleGallery={this.toggleGallery.bind(this)}/>
          </div>
        </div>
        <div className="photoGallery">
          {showGallery && (<PhotoGallery photos={photos} toggleGallery={this.toggleGallery.bind(this)} clickIndex={this.state.clickIndex} showGallery={this.state.showGallery}/>)}
        </div>
      </div>
    );
  }

}

export default Gallery;