import React from 'react';

export default ({ item, showDetails }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={item.picture} alt="Card cap" />
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
