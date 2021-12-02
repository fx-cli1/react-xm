import  {createStore,combineReducers,applyMiddleware} from  "redux"
import  thunk from "redux-thunk";
import userReducers from '../reducers/userReducers';
import navReducers from '../reducers/navReducers';
let  all = combineReducers({
    userReducers,
    navReducers
})

export default createStore(all,applyMiddleware(thunk));