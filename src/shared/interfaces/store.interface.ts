import { ICatalog } from './catalog.interface';
import { IFilter, IPrice } from './filter.interface';

export interface IStore {
  isLoading: boolean;
  data: Array<ICatalog>;
  filteredData: Array<ICatalog>;
  filters: IFilter;
  selectedFilters: ISelectedFilters;
}

export interface ISelectedFilters {
  searchText: string;
  price: IPrice;
  brands: Array<string>;
  announceDate: {
    year: number;
    month: string;
  };
}
