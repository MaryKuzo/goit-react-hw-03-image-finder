import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Added 'toast' import
import 'react-toastify/dist/ReactToastify.css';
import fetchImages from './API/pixabay-api';
import { Button } from './Button/Button';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected'
};
export class App extends Component {
  state = {
    imageName: '',
    images: [],
    status: Status.IDLE,
    page: 1,
    showModal: false,
    showButton: false,
    modalImage: '',
    imageAlt: ''
  };

componentDidUpdate(prevProps, prevState) {
  const prevName = prevState.imageName;
  const nextName = this.state.imageName;

  const prevPage = prevState.page;
  const nextPage = this.state.page;

  if (prevName !== nextName || prevPage !== nextPage) {
    this.setState({ status: Status.PENDING });

    fetchImages(nextName, this.state.page)
      .then(images => {
        if (images.hits.length < 1) {
          this.setState({
            status: Status.IDLE,
            showButton: false
          });
          return toast.error(`No such image ${nextName}`);
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...images.hits],

          }));

          this.setState({
            status: Status.RESOLVED,
            showButton:
              this.state.page < Math.ceil(images.total / 12) ? true : false

          })
        }
      })
      .catch(error => this.setState({ error, status: Status.REJECTED }));
  }
}


  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleFormSubmit = (imageName) => {
    if (imageName === this.state.imageName) {
      return;
    }
    this.setState({
      imageName,
      page: 1,
      images: [],
      status: Status.IDLE,
      showButton: false,
    });
  };
  handleModalImage = e => {
    this.setState({modalImage: e})
  }
  handleImageAlt = e => {
    this.setState({imageAlt: e})
  }

  loadMoreImages = () => {
    this.setState(prevState => ({page: prevState.page +1}))
  }


  render() {
    const {
      images,
      status,
      showModal,
      showButton,
      modalImage,
      imageAlt } = this.state;
    const {
      toggleModal,
      loadMoreImages,
      handleModalImage,
      handleImageAlt } = this;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === Status.IDLE && <h2>Please,enter text in the search field</h2>}
        {status === Status.PENDING && <Loader />}
        {images.length > 0 &&
          (<ImageGallery
          showModal={toggleModal}
          images={images}
          handleModalImage={handleModalImage}
          handleImageAlt={handleImageAlt}
          />)}
        {showButton && <Button onClick={loadMoreImages} />}

        {showModal && (
          <Modal onClose={toggleModal}>
            <img src={modalImage} alt={imageAlt} width='700' />

          </Modal>
        )}
        <ToastContainer position="top-center" autoClose={2000} />
        {status === Status.REJECTED && <div>No such image {this.state.imageName}</div>}

      </>
    );
  }
}

