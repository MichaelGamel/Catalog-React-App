import React from 'react';
// import LazyLoad from 'react-lazyload';
import { ICatalog } from '../../../shared/interfaces';

interface ICardProps {
  item: ICatalog;
  showDetails: Function;
}

export const Card: React.FC<ICardProps> = ({ item, showDetails }) => {
  return (
    <div className="card">
      {/* <LazyLoad
        height={330}
        onc={true}
        placeholder={<div className="placeholder" />}
      > */}
      <img className="card-img-top" src={item.picture} alt="{item.phone}" />
      {/* </LazyLoad> */}
      <div className="card-body">
        <h5 className="card-text">
          <small> {item.brand} </small>
        </h5>
        <p className="card-title">{item.phone}</p>
      </div>
      <p className="card-price">AED {item.price}</p>
      <button onClick={() => showDetails(item)} className="btn btn-primary">
        View Details
      </button>
    </div>
  );
};
