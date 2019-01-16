import React from 'react';
import ModalDisplay from './ModalDisplay.jsx';
import ModalDescription from './ModalDescription.jsx';
import ModalCarousel from './ModalCarousel.jsx';
import ModalLighting from './ModalLighting.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayIndex: 0,
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
      displayIndex: clickIndex,
      photosLength: photos.length - 1
    });
  }

  renderAsMainImage(e) {
    this.setState({ displayIndex: Number(e.target.id) });
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
    const { displayIndex, photosLength, showCarousel, lightMode } = this.state;

    return (
      <div className="modal" id={lightMode ? 'lightMode' : 'modal'}>
        <div className="modal-content" id={lightMode ? 'lightModeX' : 'modal-content'}>
          <span className="closeBtn" onClick={this.props.toggleGallery}>&times;</span>
          <ModalDisplay previous={this.previous} next={this.next} photos={this.props.photos} displayIndex={displayIndex} />
          <ModalDescription displayIndex={displayIndex} photos={this.props.photos} photosLength={photosLength} showOrHideList={this.showOrHideList} />
          <ModalCarousel photos={this.props.photos} displayIndex={displayIndex} showCarousel={showCarousel} renderAsMainImage={this.renderAsMainImage} />
          <ModalLighting lightMode={lightMode} changeLighting={this.changeLighting} />
        </div>
      </div>
    );
  }
}

export default Modal;
