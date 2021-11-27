import  {createStore,combineReducers,applyMiddleware} from  "redux"
import  thunk from "redux-thunk";
import userReducers from '../reducers/userReducers'
let  all = combineReducers({
    userReducers
})

export default createStore(all,applyMiddleware(thunk));