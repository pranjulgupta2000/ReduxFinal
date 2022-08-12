import { combineReducers } from 'redux';
import BollywoodReducer from './BollywoodReducer';
//import HollywoodReducer from './HollywoodReducer';
const rootReducer = combineReducers({
    BollywoodReducer,
})

export default rootReducer;

/*

Create a rootreducer containing all the reducers, in this case it contains the single property bookreducer

*/ 