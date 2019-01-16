import React from 'react';
import ModalDisplay from './ModalDisplay.jsx';
import ModalDescription from './ModalDescription.jsx';
import ModalCarousel from './ModalCarousel.jsx';
import ModalLighting from './ModalLighting.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    let { clickIndex, photos } = this.props;
    this.state = {
      displayIndex: clickIndex,
      photos: photos,
      photosLength: photos.length - 1,
      showCarousel: true,
      lightMode: false,
    };
  }

  projectAsDisplay(e) {
    e.preventDefault();
    this.setState({ displayIndex: Number(e.target.id) });
  }

  showOrHideList(e) {
    e.preventDefault();
    const { showCarousel } = this.state;
    this.setState({ showCarousel: !showCarousel });
  }

  changeLighting(e) {
    e.preventDefault();
    const { lightMode } = this.state;
    this.setState({ lightMode: !lightMode });
  }

  previous() {
    const { displayIndex, photosLength } = this.state;
    if (displayIndex !== 0) {
      const previousIndex = displayIndex - 1;
      this.setState({ displayIndex: previousIndex });
    } else {
      this.setState({ displayIndex: photosLength });
    }
  }

  next() {
    const { displayIndex, photosLength } = this.state;
    if (displayIndex !== photosLength) {
      const nextIndex = displayIndex + 1;
      this.setState({ displayIndex: nextIndex });
    } else {
      this.setState({ displayIndex: 0 });
    }
  }

  render() {
    const { displayIndex, photos, photosLength, showCarousel, lightMode } = this.state;

    return (
      <div className="modal" id={lightMode ? 'lightMode' : 'modal'}>
        <div className="modal-content" id={lightMode ? 'lightModeX' : 'modal-content'}>
          <span className="closeBtn" onClick={this.props.toggleGallery}>&times;</span>
          <ModalDisplay previous={this.previous.bind(this)} next={this.next.bind(this)} photos={photos} displayIndex={displayIndex} />
          <ModalDescription displayIndex={displayIndex} photos={photos} photosLength={photosLength} showOrHideList={this.showOrHideList.bind(this)} />
          <ModalCarousel photos={photos} displayIndex={displayIndex} showCarousel={showCarousel} projectAsDisplay={this.projectAsDisplay.bind(this)}  />
          <ModalLighting lightMode={lightMode} changeLighting={this.changeLighting.bind(this)} />
        </div>
      </div>
    );
  }
}

export default Modal;
