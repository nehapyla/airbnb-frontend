import Navbar from "../components/navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { verifyToken } from "../utils/utls";
import { useEffect } from "react";
import Categories from "./categ";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=> {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        const email = localStorage.getItem("email");
        console.log(verifyToken(token,  email,userId));
        if(!verifyToken(token,  email,userId)) navigate("/login");
        // dispatch()
    },[]);
    useEffect(() => {
        // dispatch(userSlice())
    })
    return (
        <>
        <div>
            <Navbar />
            <Categories />
            <Outlet/>
        </div>
        </>
    )
}

export default Home;