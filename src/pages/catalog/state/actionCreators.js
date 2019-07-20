import {
  FETCH_CATALOG,
  FETCH_CATALOG_SUCCESS,
  SELECT_ANNOUNCE_YEAR,
  SELECT_ANNOUNCE_MONTH,
  SELECT_BRAND,
  SELECT_PRICE,
  SEARCH_BY_TEXT
} from './actionTypes';

export const fetchCatalog = () => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_CATALOG
      });
      const res = await fetch('https://api.myjson.com/bins/1f2r2v');
      const data = await res.json();
      dispatch({
        type: FETCH_CATALOG_SUCCESS,
        payload: data
      });
    } catch (err) {}
  };
};

export const selectPrice = (min, max) => {
  return dispatch => {
    dispatch({
      type: SELECT_PRICE,
      payload: { min, max }
    });
  };
};
export const selectBrand = (brand) => {
  return dispatch => {
    dispatch({
      type: SELECT_BRAND,
      payload: brand
    });
  };
};

export const selectAnnounceYear = (year) => {
  return dispatch => {
    dispatch({
      type: SELECT_ANNOUNCE_YEAR,
      payload: year
    });
  };
};

export const selectAnnounceMonth = (month) => {
  return dispatch => {
    dispatch({
      type: SELECT_ANNOUNCE_MONTH,
      payload: month
    });
  };
};

export const searchByPhone = (text) => {
  return dispatch => {
    dispatch({
      type: SEARCH_BY_TEXT,
      payload: text
    });
  };
};
