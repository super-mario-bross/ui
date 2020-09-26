import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { Button, Box } from 'grommet';
import { FormClose } from 'grommet-icons';
import "./index.scss";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    backgroundColor: '#fff',
    transform: 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

const AddRatingsReviewModal = ({ openModalButtonLabel, children }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className="text-right">
        <Button primary label={openModalButtonLabel} onClick={openModal} />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"

      >
        <div ref={_subtitle => (subtitle = _subtitle)}>
          <div className="close-button-modal-wrapper">
          <Button hoverIndicator="light-1" onClick={closeModal}>
            <Box pad="small" direction="row" align="center" gap="small">
              <FormClose size="medium" />
            </Box>
          </Button>
          </div>
          {children}
        </div>
      </Modal>
    </div>
  );
};

AddRatingsReviewModal.propTypes = {
  openModalButtonLabel: PropTypes.string,
};

AddRatingsReviewModal.defaultProps = {
  openModalButtonLabel: 'Open Modal'
};


export default AddRatingsReviewModal;