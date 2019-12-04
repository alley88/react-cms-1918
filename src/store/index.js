import {createStore,combineReducers,applyMiddleware} from "redux"
import user from "./reducers/user"
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"
const reducers = combineReducers({
    user
})


const store = createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)));

export default store;