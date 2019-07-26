import React, { useState } from 'react';
import { Card } from './Card';
import { CardDetails } from './CardDetails';
import { CatalogModal } from '../../../shared/components/Modal';
import { ICatalog } from '../../../shared/interfaces';

interface IContentProps {
  data: Array<ICatalog>;
}

export const Content: React.FC<IContentProps> = ({ data }) => {
  const [show, setShow] = useState(false);
  // eslint-disable-next-line
  const [details, setDetails] = useState(new Object() as ICatalog);

  const showDetailsHandler = (ItemDetails: ICatalog) => {
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
            showDetails={(ItemDetails: ICatalog) =>
              showDetailsHandler(ItemDetails)
            }
          />
        </div>
      ))
    ) : (
      <div className="data-not-found">
        <img src="https://k.nooncdn.com/s/app/2019/com-www-bigalog/1800fd3741eeb9b8e17ff17f6e9cafe93e537f30/static/images/empty-state-product.png" alt="empty state" />
        <h3> We couldn’t find what you were looking for </h3>
        <p>
          Keep calm and search again. We have SO many other products that you
          will like!
        </p>
      </div>
    );

  return (
    <>
      <div className="row">{cards}</div>
      <CatalogModal
        isVisable={show}
        title={details.phone}
        onClose={() => onModalCloseHandler()}
      >
        <CardDetails item={details} />
      </CatalogModal>
    </>
  );
};
