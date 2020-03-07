import React, { Component } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'

class Gallery extends Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      selectedIndex: 0,
    }

    this.toggleLightbox = this.toggleLightbox.bind(this)
  }
  toggleLightbox(selectedIndex) {
    this.setState(state => ({
      lightboxIsOpen: !state.lightboxIsOpen,
      selectedIndex,
    }))
  }
  renderGallery(images) {
    if (!images) return

    const gallery = images.map((obj, i) => {
      console.log(obj)
      return (
        <a
          className={obj.landscape ? 'landscape' : ''}
          key={obj.source}
          href={obj.source}
          onClick={e => {
            e.preventDefault()
            this.toggleLightbox(i)
          }}
        >
          <img src={obj.thumbnail} />
        </a>
      )
    })

    return <div className="gallery">{gallery}</div>
  }
  render() {
    const { images } = this.props
    const { selectedIndex, lightboxIsOpen } = this.state

    return (
      <div>
        {this.renderGallery(images)}
        <ModalGateway>
          {lightboxIsOpen && (
            <Modal onClose={this.toggleLightbox}>
              <Carousel currentIndex={selectedIndex} views={images} />
            </Modal>
          )}
        </ModalGateway>
      </div>
    )
  }
}

export default Gallery
