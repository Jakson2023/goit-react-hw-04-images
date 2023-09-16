import { ImgGalleryItem, GalleryImg } from './ImageGalleryItem.styled';

export const GalleryItem = ({ imgWeb,imgLarge, onClick }) => {
  return (
    <ImgGalleryItem className="gallery-item">
      <GalleryImg
        src={imgWeb}
        alt=""
        onClick={() => {
          onClick(imgLarge);
        }}
      />
    </ImgGalleryItem>
  );
};
