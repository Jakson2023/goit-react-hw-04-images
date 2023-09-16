import { AppGallery } from './App.styled';
import { SearchbarHead } from './Searchbar/Searchbar';
import { serviceReq } from '../api/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMore } from './Button/Button';
import { ModalWindow } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { useEffect, useState } from 'react';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [end, setEnd] = useState(true);
  const [modalImg, setModalImg] = useState('');

  const handleSubmit = search => {
    setQuery(search);
    setImages([]);
    setPage(1);
    setEnd(true);
  };

  const toggleModal = modalImage => {
    setIsModalOpen(prevItems => !prevItems);
    setModalImg(modalImage);
  };

  const loadMore = () => {
    setPage(prevItems => prevItems + 1);
  };

  useEffect(() => {
    async function updateDate() {
      if (query === '') {
        return;
      }
      try {
        setLoading(true);
        const imageData = await serviceReq(query, page);
        const imagesOnly = imageData.hits.map(
          ({ webformatURL, largeImageURL, id }) => {
            return { webformatURL, largeImageURL, id };
          }
        );
        if (
          imageData.hits.length / 12 < 1 &&
          imageData.totalHits !== page * 12
        ) {
          setEnd(false);
          alert('The last page will be loaded!');
        }
        setImages(prevItems => [...prevItems, ...imagesOnly]);
      } catch (error) {
        setEnd(true);
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    }
    updateDate();
  }, [query, page]);

  return (
    <AppGallery>
      <SearchbarHead onSubmit={handleSubmit} />
      <ImageGallery img={images} onClick={toggleModal} />
      {images.length > 0 && end && <LoadMore onClick={loadMore} />}
      {loading && <Loader />}
      {isModalOpen && <ModalWindow onClick={toggleModal} modalImg={modalImg} />}
    </AppGallery>
  );
};
