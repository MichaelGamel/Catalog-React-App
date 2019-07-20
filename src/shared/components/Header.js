import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { searchByPhone } from '../../pages/catalog/state/actionCreators';

const Header = ({ searchPhone }) => {
  const inputEl = useRef(null);

  const searchHandler = e => {
    e.preventDefault();
    searchPhone(inputEl.current.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <span className="navbar-brand">Catalog Application</span>

      <div className="collapse navbar-collapse">
        <form
          className="form-inline my-2 my-lg-0"
          onSubmit={e => searchHandler(e)}
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search by phone name"
            aria-label="Search by phone name"
            ref={inputEl}
          />
          <input className="btn-sm btn-primary" type="submit" value="Search" />
        </form>
      </div>
    </nav>
  );
};

const mapDispatchToProps = dispatch => ({
  searchPhone: text => {
    dispatch(searchByPhone(text));
  }
});
export default connect(
  null,
  mapDispatchToProps
)(Header);
