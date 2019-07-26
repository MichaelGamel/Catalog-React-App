import React from 'react';
import { ICatalog } from '../../../shared/interfaces';

interface ICardDetailsProps {
  item: ICatalog;
}

export const CardDetails: React.FC<ICardDetailsProps> = ({ item }) => {
  return (
    <div className="row">
      <img
        className="col-4"
        src={item.picture}
        alt="Card cap"
        style={{ height: '70%' }}
      />
      <div className="col-8">
        <p>
          <small>Brand:</small> {item.brand}
        </p>
        <p>
          <small>Sim:</small> {item.sim}
        </p>
        <p>
          <small>Release Date:</small> {item.announceYear} {item.announceMonth}
        </p>
        <p>
          <small>Resolution:</small> {item.resolution}
        </p>
        <p>
          <small>Audio Jack:</small> {item.audioJack}
        </p>
        <p>
          <small>GPS:</small> {item.gps}
        </p>
        <p>
          <small>Battery:</small> {item.battery}
        </p>
        <p>
          <small>Price:</small> AED {item.price}
        </p>
      </div>
    </div>
  );
};
