import {ListItem, Image} from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({
  images,
  showModal,
  handleModalImage,
handleImageAlt}) => {
  return (
    <>
      {images.map((image) => (
        <ListItem
          key={image.id}
        onClick={showModal}>
          <Image
            src={image.webformatURL}
            alt={image.tags}
            onClick={() => {
              handleModalImage(image.largeImageURL)
              handleImageAlt(image.tags)
            }}

          />
        </ListItem>
      ))}
    </>
  );
};
