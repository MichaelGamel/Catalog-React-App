import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default ({ isVisable, children, onClose, title }) => {
  const [show, setShow] = useState(false);

  useEffect(() => setShow(isVisable), [isVisable]);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
