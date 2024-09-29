import { Link, useParams } from "react-router-dom";
import "./styles/page2.scss";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/thunk";
const Page2 = () => {
    const pincode = useSelector(s => s.pincode);
    const postOffice = useSelector(s=> s.postOffice);
    const dispatch = useDispatch();
    const [search,setSearch]= useState("");
    useEffect(() => {
        dispatch(fetchData);
    }, [pincode]);

    if(!postOffice){
        return <h1>Loading...</h1>
    }

    if (pincode.toString().length !== 6 ) return <div>
        <h2>Please Enter a Valid Pincode</h2>
        <p>Let's Go Back Together <Link to={"/"}>Back</Link></p>
    </div>

   
    return (
        <div className="page2">
            <h3>Pincode : {pincode}</h3>
            <p><span className="message">Message: </span> {postOffice?.Message}</p>
            <div className="search-box">
            <label htmlFor="search" className="material-icons">search</label><input type="text"  placeholder="filter" value={search} id="search" onChange={e=>setSearch(e.target.value)} />
          
            </div>
              <div className="cards">
                {
                    postOffice["PostOffice"]?.filter(item=>{
                       if(item["Name"]?.includes(search) ||item["BranchType"]?.includes(search) || item["District"]?.includes(search) || item["Division"]?.includes(search) )return true;
                        return false;
                    })?.map((post, i) => <Card key={i} data={post} />)
                }

            </div>
        </div>
    )
}

export default Page2;