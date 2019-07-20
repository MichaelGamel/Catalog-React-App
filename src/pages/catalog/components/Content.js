import React, { useState } from 'react';
import Card from './Card';
import CardDetails from './CardDetails';
import Modal from '../../../shared/components/Modal';

export default ({ data }) => {
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState({});

  const showDetailsHandler = ItemDetails => {
    setShow(true);
    setDetails(ItemDetails);
  };

  const onModalCloseHandler = () => {
    setShow(false);
  };

  const cards = data.map(item => (
    <div className="col-3 mb-3" key={item.id}>
      <Card
        item={item}
        showDetails={ItemDetails => showDetailsHandler(ItemDetails)}
      />
    </div>
  ));

  return (
    <>
      <div className="row">{cards}</div>
      <Modal isVisable={show} title={details.phone} onClose={() => onModalCloseHandler()}>
        <CardDetails item={details} />
      </Modal>
    </>
  );
};
