import { Link, useParams } from "react-router-dom";
import "./styles/page2.scss";
import { useEffect } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/thunk";
const Page2 = () => {
    const pincode = useSelector(s => s.pincode);
    const dispatch = useDispatch();
    useEffect(() => {
                dispatch(fetchData);
    }, []);

    if (pincode.toString().length !== 6) return <div>
        <h2>Please Enter a Valid Pincode</h2>
        <p>Let's Go Back Together <Link to={"/"}>Back</Link></p>
    </div>



    return (
        <div className="page2">
        <h3>Pincode : {pincode}</h3>
        <p><span className="message">Message: </span> Some                 message here</p>
        <span className="material-icons">search</span><input type="text" placeholder="filter" />
        <div className="cards">
            {
                [1,2,3,4,5,6,67,9].map((post,i) => <Card key={i} data={{
        "Name": "Chandori",
        "Description": null,
        "BranchType": "Branch Post Office",
        "DeliveryStatus": "Delivery",
        "Circle": "Maharashtra",
        "District": "Bhandara",
        "Division": "Nagpur Moffusil",
        "Region": "Nagpur",
        "Block": "Bhandara",
        "State": "Maharashtra",
        "Country": "India",
        "Pincode": "441924"
      }}/>)
            }

        </div>
        </div>
    )
}

export default Page2;