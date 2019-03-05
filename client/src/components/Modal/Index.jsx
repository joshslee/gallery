import React from 'react';
import ModalDisplay from './ModalDisplay.jsx';
import ModalDescription from './ModalDescription.jsx';
import ModalCarousel from './ModalCarousel.jsx';
import ModalLighting from './ModalLighting.jsx';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      photosLength: 0,
      showCarousel: true,
      lightMode: false,
    };
    this.renderAsMainImage = this.renderAsMainImage.bind(this);
    this.showOrHideList = this.showOrHideList.bind(this);
    this.changeLighting = this.changeLighting.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  componentDidMount() {
    let {clickIndex, photos} = this.props;
    this.setState({
      currentIndex: clickIndex,
      photosLength: photos.length
    });
  }

  renderAsMainImage(e) {
    this.setState({ currentIndex: Number(e.target.id) });
  }

  showOrHideList() {
    const { showCarousel } = this.state;
    this.setState({ showCarousel: !showCarousel });
  }

  changeLighting() {
    const { lightMode } = this.state;
    this.setState({ lightMode: !lightMode });
  }

  previous() {
    const { currentIndex, photosLength } = this.state;
    this.setState({ currentIndex: (currentIndex + photosLength - 1) % photosLength });
  }

  next() {
    const { currentIndex, photosLength } = this.state;
    this.setState({ currentIndex: (currentIndex + 1) % photosLength });
  }

  render() {
    const { currentIndex, photosLength, showCarousel, lightMode } = this.state;
    const { photos, toggleGallery } = this.props;

    return (
      <div className="modal" id={lightMode ? 'lightMode' : 'modal'}>
        <div className="modal-content" id={lightMode ? 'lightModeX' : 'modal-content'}>
          <span className="closeBtn" onClick={toggleGallery}>&times;</span>
          <ModalDisplay previous={this.previous} next={this.next} photos={photos} currentIndex={currentIndex} />
          <ModalDescription currentIndex={currentIndex} photos={photos} photosLength={photosLength} showOrHideList={this.showOrHideList} showCarousel={showCarousel}/>
          <ModalCarousel photos={photos} currentIndex={currentIndex} showCarousel={showCarousel} renderAsMainImage={this.renderAsMainImage} />
          <ModalLighting lightMode={lightMode} changeLighting={this.changeLighting} />
        </div>
      </div>
    );
  }
}