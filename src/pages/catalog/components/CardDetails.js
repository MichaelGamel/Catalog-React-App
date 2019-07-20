import React from 'react';

export default ({ item }) => {
  return (
    <div className="row">
      <img className="col-4" src={item.picture} alt="Card cap" style={{height:'70%'}} />
      <div className="col-8">
        <p><small>Brand:</small> {item.brand}</p>
        <p><small>Sim:</small> {item.sim}</p>
        <p><small>Release Date:</small> {item.release.announceDate}</p>
        <p><small>Resolution:</small> {item.resolution}</p>
        <p><small>Audio Jack:</small> {item.hardware.audioJack}</p>
        <p><small>GPS:</small> {item.hardware.gps}</p>
        <p><small>Battery:</small> {item.hardware.battery}</p>
        <p><small>Price:</small> AED {item.release.priceEur}</p>
      </div>
    </div>
  );
};
