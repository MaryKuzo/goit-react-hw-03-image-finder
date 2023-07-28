import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import {List} from './ImageGallery.styled'
export const ImageGallery = ({images, showModal, handleModalImage, handleImageAlt}) => {
  return (
    <List>
      <ImageGalleryItem
        images={images}
        showModal={showModal}
        handleModalImage={handleModalImage}
        handleImageAlt={handleImageAlt}

      />
    </List>
  )
}
