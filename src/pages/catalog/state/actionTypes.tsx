import { Action } from "redux";
import { IPrice } from "../../../shared/interfaces";

export const FETCH_CATALOG = 'FETCH_CATALOG';
export const FETCH_CATALOG_SUCCESS = 'FETCH_CATALOG_SUCCESS';
export const FETCH_CATALOG_FAIL = 'FETCH_CATALOG_FAIL';
export const SELECT_ANNOUNCE_YEAR = 'SELECT_ANNOUNCE_YEAR';
export const SELECT_ANNOUNCE_MONTH = 'SELECT_ANNOUNCE_MONTH';
export const SELECT_BRAND = 'SELECT_BRAND';
export const SELECT_PRICE = 'SELECT_PRICE';
export const SEARCH_BY_TEXT = 'SEARCH_BY_TEXT';

export interface IFetchCatalogAction extends Action<typeof FETCH_CATALOG> {}
export interface IFetchCatalogSuccessAction extends Action<typeof FETCH_CATALOG_SUCCESS> {
    payload: any;
}
export interface IFetchCatalogFailAction extends Action<typeof FETCH_CATALOG_FAIL> {
    payload: {};
}
export interface ISearchByTextAction extends Action<typeof SEARCH_BY_TEXT> {
    payload: string;
}
export interface ISelectAccounceYearAction extends Action<typeof SELECT_ANNOUNCE_YEAR> {
    payload: number;
}
export interface ISelectAccounceMonthAction extends Action<typeof SELECT_ANNOUNCE_MONTH> {
    payload: string;
}
export interface ISelectBrandAction extends Action<typeof SELECT_BRAND> {
    payload: string;
}
export interface ISelectPriceAction extends Action<typeof SELECT_PRICE> {
    payload: IPrice
}


export type CatalogActions =
  | IFetchCatalogAction
  | IFetchCatalogSuccessAction
  | IFetchCatalogFailAction
  | ISearchByTextAction
  | ISelectAccounceYearAction
  | ISelectAccounceMonthAction
  | ISelectBrandAction
  | ISelectPriceAction;