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

  const cards =
    data.length > 0 ? (
      data.map(item => (
        <div className="col-3 mb-3" key={item.id}>
          <Card
            item={item}
            showDetails={ItemDetails => showDetailsHandler(ItemDetails)}
          />
        </div>
      ))
    ) : (
      <div className="data-not-found">
        <img src="https://k.nooncdn.com/s/app/2019/com-www-bigalog/1800fd3741eeb9b8e17ff17f6e9cafe93e537f30/static/images/empty-state-product.png" />
        <h3> We couldn’t find what you were looking for </h3>
        <p>Keep calm and search again. We have SO many other products that you will like!</p>
      </div>
    );

  return (
    <>
      <div className="row">{cards}</div>
      <Modal
        isVisable={show}
        title={details.phone}
        onClose={() => onModalCloseHandler()}
      >
        <CardDetails item={details} />
      </Modal>
    </>
  );
};
