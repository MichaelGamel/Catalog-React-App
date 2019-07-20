import React, { useEffect } from 'react';
import Filters from './components/Filters';
import Content from './components/Content';
import './catalog.scss';
import { connect } from 'react-redux';
import { fetchCatalog } from './state/actionCreators';
import Spinner from '../../shared/components/Spinner';

const Catalog = ({ isLoading, catalogData, fetchCatalog }) => {
  useEffect(() => {
    fetchCatalog();
  }, []);

  const bindContent = isLoading ? <Spinner /> : <Content data={catalogData} />;

  return (
    <div className="catalog">
      <div className="row">
        <div className="col-3">
          <Filters />
        </div>
        <div className="col-9">{bindContent}</div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCatalog: () => {
    dispatch(fetchCatalog());
  }
});

const mapStateToProps = state => ({
  catalogData: state.catalog.filteredData,
  isLoading: state.catalog.isLoading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalog);
