import React from 'react';
import Card from './Card';

export default ({ data }) => {
  const cards = data.map(item => (
    <div className="col-3 mb-3" key={item.id}>
      <Card item={item} />
    </div>
  ));

  return <div className="row">{cards}</div>;
};
