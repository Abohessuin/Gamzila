import gamesReducer from './gamesReducer';
import detailReducer from'./detailReducer';
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    games:gamesReducer,
    detail: detailReducer,
});


export default rootReducer;

