import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImgGallery } from './ImageGallery.styled';
export const ImageGallery = ({ img, onClick }) => {

  return (
    <ImgGallery>
      {img.map(({id,webformatURL,largeImageURL}) => ( 
        <GalleryItem key={id} imgWeb={webformatURL} imgLarge={largeImageURL} onClick={onClick} />
      ))}
    </ImgGallery>
  );
};
