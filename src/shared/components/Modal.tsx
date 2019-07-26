import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

interface IModalProps {
  isVisable: boolean;
  onClose: Function;
  title: string;
}

export const CatalogModal: React.FC<IModalProps> = ({
  isVisable,
  onClose,
  children,
  title
}) => {
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
