import axios from "axios";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";

export const actions={
    C_PIN : "C_PIN",
}
const initailState = {
    postOffice : null,
    pincode : 441924
}
const dataReducer = (state=initailState, action)=>{
    if(action.type===actions.C_PIN){
        state.pincode = action.pincode
        return {...state}
    }
    return state;
}

const store = createStore(dataReducer,applyMiddleware(thunk));

export default store;

