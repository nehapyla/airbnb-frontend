import axios from "axios";
import React, { useEffect } from "react";
import { baseUrl } from "../utils/api";
import { useDispatch } from "react-redux";
import { roomData } from "../redux/slices/roomsSlice";
import { Link } from "react-router-dom";

export default function Checkout() {
    const dispatch = useDispatch();
    const fetchPayment = async () => {
        try {
            const cs_id = localStorage.getItem("cs_id");
            localStorage.removeItem("cs_id");
            const { data: sessionData } = await axios.get(
                baseUrl + "/payment/session/" + cs_id
            );
            // const { data: paymentIntent } = await axios.get(
            //     baseUrl + "/payment/paymentIntent/" + sessionData.payment_intent
            // );
            // if (paymentIntent.status == "succeeded") {
            //     dispatch(
            //         roomData({
            //             userId: sessionData.metadata.userId,
            //             roomId: sessionData.metadata.roomId,
            //             paymentId: sessionData.payment_intent,
            //         })
            //     );
            // } 
            const { metadata, amount_total } = sessionData;
            const { roomId, userId, startDate, endDate } = metadata
            console.log(roomId, userId, startDate, endDate, amount_total)
                
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchPayment();
    }, []);
    return <div>
        <div>
            <p>Payment succeeded</p>
        </div>
        <Link to="/">
            <p>Home</p>
        </Link>
    </div>;
}