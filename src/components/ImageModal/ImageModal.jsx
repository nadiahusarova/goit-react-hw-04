import React from 'react';
import Modal from 'react-modal';
import s from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      className={s.ModalContent}
      overlayClassName={s.ModalOverlay}
    >
      <div className={s.ImageWrapper}>
        <img src={image?.urls?.regular} alt="Large view" className={s.Image} />
      </div>
    </Modal>
  );
};

export default ImageModal;
