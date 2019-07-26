import {
  FETCH_CATALOG,
  FETCH_CATALOG_SUCCESS,
  SELECT_PRICE,
  SELECT_BRAND,
  SELECT_ANNOUNCE_YEAR,
  SELECT_ANNOUNCE_MONTH,
  SEARCH_BY_TEXT
} from './actionTypes';
import { Dispatch } from 'redux';
import { IPrice } from '../../../shared/interfaces';

export const fetchCatalog = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: FETCH_CATALOG
      });
      const res = await fetch('https://api.myjson.com/bins/1f2r2v');
      const data = await res.json();
      return dispatch({
        type: FETCH_CATALOG_SUCCESS,
        payload: data
      });
    } catch (err) {}
  };
};

export const selectPrice = (price: IPrice) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SELECT_PRICE,
      payload: price
    });
  };
};
export const selectBrand = (brand: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SELECT_BRAND,
      payload: brand
    });
  };
};

export const selectAnnounceYear = (year: number) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SELECT_ANNOUNCE_YEAR,
      payload: year
    });
  };
};

export const selectAnnounceMonth = (month: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SELECT_ANNOUNCE_MONTH,
      payload: month
    });
  };
};

export const searchByPhone = (text: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SEARCH_BY_TEXT,
      payload: text
    });
  };
};
