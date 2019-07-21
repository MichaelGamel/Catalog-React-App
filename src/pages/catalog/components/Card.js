import React from 'react';
import LazyLoad from 'react-lazyload';

export default ({ item, showDetails }) => {
  return (
    <div className="card">
      <LazyLoad
        height={330}
        onc={true}
        placeholder={<div className="placeholder" />}
      >
        <img className="card-img-top" src={item.picture} alt="{item.phone}" />
      </LazyLoad>
      <div className="card-body">
        <h5 className="card-text">
          <small> {item.brand} </small>
        </h5>
        <p className="card-title">{item.phone}</p>
      </div>
      <p className="card-price">AED {item.release.priceEur}</p>
      <button onClick={() => showDetails(item)} className="btn btn-primary">
        View Details
      </button>
    </div>
  );
};
