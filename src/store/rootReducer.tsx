import { combineReducers } from "redux";
import {catalogReducer} from '../pages/catalog/state';

const rootReducer = combineReducers ({
    catalog: catalogReducer
});

export default rootReducer;
