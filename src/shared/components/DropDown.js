import React from 'react';

export default ({ label, items, onSelect }) => {
  const options = items.map(item => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  return (
    <div>
      {label && <label className="d-block">{label}</label>}
      <select onChange={e => onSelect(e.target.value)}>
        <option value="">
          Optional
        </option>
        {options}
      </select>
    </div>
  );
};
