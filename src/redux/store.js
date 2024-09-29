import axios from "axios";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";

export const actions={
    C_PIN : "C_PIN",
    C_DATA : "C_DATA"
}
const initailState = {
    postOffice : null,
    pincode : 441924
}
const dataReducer = (state=initailState, action)=>{
    if(action.type===actions.C_PIN){
        state.pincode = action.payload.pincode
        return {...state}
    }

    if(action.type === actions.C_DATA){
        state.postOffice = action.payload.data[0];
        return {...state};
    }
    return state;
}

const store = createStore(dataReducer,applyMiddleware(thunk));

export default store;

