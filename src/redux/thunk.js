import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { actions } from "./store";

export async function fetchData(dispatch,state) {
    try{
        console.log(state());
        
        const res =await axios('https://api.postalpincode.in/pincode/'+state().pincode);
        dispatch({type : actions.C_DATA, payload : {data : res.data}})
    }catch(error){
        console.log(error);
        
    }
}