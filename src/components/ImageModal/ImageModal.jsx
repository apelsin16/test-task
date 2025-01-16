import PropTypes from 'prop-types';
import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(0, 0, 0, 0.5)',
    },
};

const ImageModal = ({ modalIsOpen, closeModal, image }) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
        >
            <h2>{image.description}</h2>
            <button onClick={closeModal} className={css.button}>
                x
            </button>
            <div>
                <img src={image} alt='Camper`s photo' />
            </div>
        </Modal>
    );
};

ImageModal.propTypes = {
    modalIsOpen: PropTypes.bool,
    closeModal: PropTypes.func,
    image: PropTypes.string,
};

export default ImageModal;