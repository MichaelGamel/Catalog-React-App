import {
  FETCH_CATALOG,
  FETCH_CATALOG_SUCCESS,
  SELECT_ANNOUNCE_YEAR,
  SELECT_ANNOUNCE_MONTH,
  SELECT_BRAND,
  SELECT_PRICE,
  SEARCH_BY_TEXT
} from './actionTypes';

const InitialState = {
  isLoading: false,
  data: [],
  filteredData: [],
  filters: {
    price: {
      min: 0,
      max: 0
    },
    brands: ['Apple', 'Ericsson', 'Nokia'],
    announceDate: {
      years: [2019, 2018, 2017, 2016, 2015, 2014],
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
    }
  },
  selectedFilters: {
    searchText: '',
    price: {
      min: 0,
      max: 0
    },
    brands: [],
    announceDate: {
      year: 0,
      month: ''
    }
  }
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case FETCH_CATALOG:
      return { ...state, isLoading: true };
    case FETCH_CATALOG_SUCCESS: {
      const result = action.payload.map(item => ({
        ...item,
        year: +item.release.announceDate.split(' ')[0],
        month: item.release.announceDate.split(' ')[1] || ''
      }));

      return {
        ...state,
        isLoading: false,
        data: result,
        filteredData: result
      };
    }
    case SELECT_PRICE: {
      const selectedFilters = {
        ...state.selectedFilters,
        price: { min: action.payload.min, max: action.payload.max }
      };
      const filteredData = filter([...state.data], selectedFilters);
      return { ...state, filteredData, selectedFilters };
    }
    case SELECT_BRAND: {
      let brands = [...state.selectedFilters.brands];
      if (brands.includes(action.payload)) {
        brands = brands.filter(b => b !== action.payload, { ...state.filters });
      } else {
        brands.push(action.payload);
      }

      const selectedFilters = {
        ...state.selectedFilters,
        brands
      };
      const filteredData = filter([...state.data], selectedFilters);
      return { ...state, filteredData, selectedFilters };
    }
    case SELECT_ANNOUNCE_YEAR: {
      const selectedFilters = {
        ...state.selectedFilters,
        announceDate: {
          month: state.selectedFilters.announceDate.month,
          year: action.payload
        }
      };
      const filteredData = filter([...state.data], selectedFilters);
      return { ...state, filteredData, selectedFilters };
    }
    case SELECT_ANNOUNCE_MONTH: {
      const selectedFilters = {
        ...state.selectedFilters,
        announceDate: {
          year: state.selectedFilters.announceDate.year,
          month: action.payload
        }
      };
      const filteredData = filter([...state.data], selectedFilters);
      return { ...state, filteredData, selectedFilters };
    }
    case SEARCH_BY_TEXT: {
      const selectedFilters = {
        ...state.selectedFilters,
        searchText: action.payload
      };

      const filteredData = filter([...state.data], selectedFilters);

      return { ...state, filteredData, selectedFilters };
    }
    default:
      return state;
  }
};

const filter = (data, selectedFilters) => {
  let filteredData = [];
  let isFiltered = false;

  // Price
  if (selectedFilters.price.max > 0) {
    isFiltered = true;
    filteredData =
      data.filter(
        item =>
          item.release.priceEur >= selectedFilters.price.min &&
          item.release.priceEur <= selectedFilters.price.max
      ) || [];
  }

  // Brand
  if (selectedFilters.brands.length > 0) {
    filteredData =
      (isFiltered ? filteredData : data).filter(item =>
        selectedFilters.brands.includes(item.brand)
      ) || [];
    isFiltered = true;
  }

  // Year
  if (selectedFilters.announceDate.year !== 0) {
    filteredData =
      (isFiltered ? filteredData : data).filter(
        item => selectedFilters.announceDate.year === item.year
      ) || [];
    isFiltered = true;
  }

  // Month
  if (selectedFilters.announceDate.month !== '') {
    filteredData =
      (isFiltered ? filteredData : data).filter(
        item => selectedFilters.announceDate.month === item.month
      ) || [];
    isFiltered = true;
  }

  // Search by text
  if (selectedFilters.searchText !== '') {
    filteredData =
      (isFiltered ? filteredData : data).filter(
        item => item.phone.toLowerCase().indexOf(selectedFilters.searchText.toLowerCase()) > -1
      ) || [];
    isFiltered = true;
  }

  return isFiltered ? filteredData : data;
};
