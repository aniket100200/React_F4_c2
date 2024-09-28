import axios from "axios";

export async function fetchData(dispatch,state) {
    try{
        const res =await axios('https://api.postalpincode.in/pincode/'+state.pincode);
       console.log(res);
    }catch(error){
        console.log(error);
        
    }
}