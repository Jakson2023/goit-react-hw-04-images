import { useEffect } from 'react';
import { Overlay, Modal } from './Modal.styled';

export const ModalWindow = props => {
  const handleKeyPress = event => {
    if (event.key === 'Escape') {
      props.onClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    <Overlay onClick={() => props.onClick()}>
      <Modal onClick={e => e.stopPropagation()}>
        <img src={props.modalImg} alt="" />
      </Modal>
    </Overlay>
  );
};
