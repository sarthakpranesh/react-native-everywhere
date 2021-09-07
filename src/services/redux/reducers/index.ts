// Imports: Dependencies
import { combineReducers } from "redux";

// importing reducers
import DefaultReducer from "./DefaultReducer";

// Redux: Root Reducer
const rootReducer = combineReducers({
  root: DefaultReducer,
});

export default rootReducer;
