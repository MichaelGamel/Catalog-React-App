# Catalog React App

### Live [Demo](https://silly-saha-56acac.netlify.com/)

## How to run this app

1. Open your terminal
2. Clone this repo by run this command
`git clone https://github.com/MichaelGamel/Catalog-React-App.git`
3. Run `cd Catalog-React-App`
4. Run `npm install`
5. Run `npm start`

## Features

- Display all products in cards style
- Search by product name
- Filter by Price (min & max)
- Filter by Brand
- Filter by Announce year & month
- Display product details by click on `View Details` Button
- Display `Placeholder` in case of the user enter filter not exists or keyword in search not exists.

## Assumptions

1. All filters return from different API so added all filters as a static.
2. All Filtrations and Search from the Frontend side.
3. No Pagination.


## Technology & Libraries

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- `React.js` with `Redux` for better state management
- `Bootstrap 4` for styling purpose
- `redux-thunk` for handling async operations
- `react-lazyload` to lazy load all images to improve the performance
- `SCSS` it's a pre-processor for CSS to give us new features not exists in the CSS
- `netlify` for deployment




## Backend APIs

- Only once API return all products [https://api.myjson.com/bins/1f2r2v](https://api.myjson.com/bins/1f2r2v)

