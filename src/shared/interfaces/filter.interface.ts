export interface IFilter {
  searchText: string;
  price: IPrice;
  brands: Array<string>;
  announceDate: IAnnounceDate;
}

export interface IPrice {
  min: number;
  max: number;
}

export interface IAnnounceDate {
  years: Array<number>;
  months: Array<string>;
}
