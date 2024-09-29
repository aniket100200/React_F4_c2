import { useState } from "react";
import "./styles/home.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/store";

const HomeScreen = () => {
        const dispatch = useDispatch();
        const pincode = useSelector(s => s.pincode);

        const navigate = useNavigate();
        return (<div className="home">
                <h3 className="aniket">Enter Pincode</h3>
                <input type="Number" placeholder="Pincode" onChange={(e) => dispatch({ type: actions.C_PIN, payload: { pincode: e.target.value } })} />
                <button className="lookup" onClick={() => navigate(`/pin-area/${pincode}`)}>Lookup</button>
        </div>);
}

export default HomeScreen;