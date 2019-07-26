import React, { useEffect } from 'react';
import Filters from './components/Filters';
import { Content } from './components/Content';
import './catalog.scss';
import { connect } from 'react-redux';
import { fetchCatalog } from './state/actionCreators';
import Spinner from '../../shared/components/Spinner';
import { ICatalog } from '../../shared/interfaces/catalog.interface';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

interface ICatalogProps {
  isLoading: boolean;
  catalogData: Array<ICatalog>;
  fetchCatalog: Function;
}

const Catalog: React.FC<ICatalogProps> = ({
  isLoading,
  catalogData,
  fetchCatalog
}) => {
  useEffect(() => {
    fetchCatalog();
    // eslint-disable-next-line
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

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  fetchCatalog: () => {
    dispatch(fetchCatalog());
  }
});

const mapStateToProps = (state: any) => ({
  catalogData: state.catalog.filteredData,
  isLoading: state.catalog.isLoading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalog);
