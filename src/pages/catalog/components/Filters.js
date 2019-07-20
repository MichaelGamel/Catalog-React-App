import React, { useState } from 'react';
import { connect } from 'react-redux';
import DropDown from '../../../shared/components/DropDown';
import {
  selectPrice,
  selectBrand,
  selectAnnounceYear,
  selectAnnounceMonth
} from '../state/actionCreators';

const Filters = ({
  filters,
  searchPrice,
  searchBrand,
  searchAnnounceYear,
  searchAnnounceMonth
}) => {
  const [min, setMin] = useState(filters.price.min);
  const [max, setMax] = useState(filters.price.max);

  const brands = filters.brands.map(brand => (
    <li key={brand}>
      <input
        type="checkbox"
        className="form-check-input"
        id={brand}
        onChange={e => searchBrand(brand)}
      />
      <label className="ml-2" htmlFor={brand}>{brand}</label>
    </li>
  ));

  const searchByPriceHandler = e => {
    e.preventDefault();
    searchPrice(min, max);
  };
  return (
    <aside className="filters">
      <section className="price">
        <h4>Price</h4>
        <form className="row" onSubmit={e => searchByPriceHandler(e)}>
          <div className="col-4 ml-1">
            <label className="d-block">Min</label>
            <input
              type="number"
              min="0"
              className="orm-control col"
              value={min}
              onChange={e => setMin(+e.target.value)}
            />
          </div>
          <div className="col-4">
            <label className="d-block">Max</label>
            <input
              type="number"
              min="0"
              className="orm-control col"
              value={max}
              onChange={e => setMax(+e.target.value)}
            />
          </div>
          <div className="col-3 mt-auto">
            <input type="submit" className="btn-sm btn-primary" value="Go" />
          </div>
        </form>
      </section>
      <section className="brand">
        <h4>Brand</h4>
        <ul className="ml-2">{brands}</ul>
      </section>
      <section className="date">
        <h4>Announce Date</h4>
        <div className="d-flex justify-content-between ml-1">
          <DropDown
            label="Years"
            items={filters.announceDate.years}
            onSelect={e => searchAnnounceYear(+e)}
          />
          <DropDown
            label="Months"
            items={filters.announceDate.months}
            onSelect={e => searchAnnounceMonth(e)}
          />
        </div>
      </section>
    </aside>
  );
};

const mapDispatchToProps = dispatch => ({
  searchAnnounceYear: year => {
    dispatch(selectAnnounceYear(year));
  },
  searchAnnounceMonth: month => {
    dispatch(selectAnnounceMonth(month));
  },
  searchBrand: brand => {
    dispatch(selectBrand(brand));
  },
  searchPrice: (min, max) => {
    dispatch(selectPrice(min, max));
  }
});

const mapStateToProps = state => ({
  filters: state.catalog.filters,
  selectedFilters: state.catalog.selectedFilters
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
