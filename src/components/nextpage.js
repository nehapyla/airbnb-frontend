import React from 'react'
import "../styles/nextpage.css"
import { IoSearch } from "react-icons/io5"
import { FiGlobe } from "react-icons/fi"
import { RxHamburgerMenu } from "react-icons/rx"
import { BsPersonCircle } from "react-icons/bs"
import { Link, useMatches } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Calendar from 'react-calendar';
import axios from "axios";
import { baseUrl } from '../utils/api';
import { useState } from 'react';

const NextPage = () => {
    const matches = useMatches();
    // console.log(matches)
    const selected = useSelector((state) => state.selRoom.value)
    console.log(selected)
    const [value, onChange] = useState(new Date());
    console.log(value);
    const a = new Date(value[1]).getTime() - new Date(value[0]).getTime();
    var days = Math.floor(a / (1000 * 60 * 60 * 24)) + 1;
    console.log(days);

    const handlePayment = async () => {
        try {
            const { data: exchangeRates } = await axios.get("https://api.exchangerate.host/latest?base=USD");

            const { data } = await axios.post(baseUrl + "/payment/checkout", {
                name: selected.name,
                space: selected.space,
                price: parseInt(selected.price.slice(1) * days * exchangeRates.rates.INR),
                roomId: selected._id,
                startDate: value[0],
                endDate: value[1]
            },
                {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                });
            localStorage.setItem("cs_id", data.id);
            window.location.assign(data.url);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='next-cont'>
            <div className='next-nav'>
                <Link to="/">
                    <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png' />
                </Link>
                <div className='search-box'>
                    <input type='text' placeholder='Search' />
                    <IoSearch className='icon' />
                </div>
                <div className='box'>
                    <div className='boxes'>
                        <p>Airbnb your home</p>
                    </div>

                    <div className='boxes'>
                        <FiGlobe className='globe' />
                    </div>

                    <div className='profilebox'>
                        <RxHamburgerMenu className='menu' />
                        <BsPersonCircle className='person' />
                    </div>
                </div>
            </div>

            <div className='room-details'>
                <div>
                    <h4 className='text'>{selected.name}</h4>
                </div>
                <div>
                    <p className='text'>{selected.host_location}</p>
                </div>
                <div className='images-section'>
                    <div>
                        <img className='next-img1' src={selected.picture_url} />
                    </div>
                    <div>
                        <div>
                            <img className='next-img2' src={selected.picture_url} />
                            <img className='next-img2' src={selected.picture_url} />
                        </div>
                        <div>
                            <img className='next-img2' src={selected.picture_url} />
                            <img className='next-img2' src={selected.picture_url} />
                        </div>
                    </div>
                </div>
                <div className='host-deet'>
                    <p className='text'>Hosted by {selected.host_name}</p>
                    <img className='host-img' src={selected.host_thumbnail_url} />
                </div>
                <div className='room-deets'>
                    <p className='text'>{selected.guests_included} guests </p>
                    <p className='text2'>{selected.bedrooms} bedrooms </p>
                    <p className='text2'>{selected.beds} beds</p>
                    <p className='text2'>{selected.bathrooms} bathrooms</p>
                </div>
                <div className='space-deets'>
                    <h5 className='text'>About the space: </h5>
                    <p className='space-text'>{selected.space}</p>
                </div>
                <div>
                    <p className='space-text'>{selected.access}</p>
                </div>
                {/* CALENDER */}
                <div className='calender'>
                    <div className='cal'>
                        <Calendar onChange={onChange} value={value} selectRange={true} />
                    </div>
                    <div>
                        <p className='text3'>Start Date: {value && value[0] && new Date(value[0]).toDateString()} </p>
                        <p className='text3'>End Date: {value && value[1] && new Date(value[1]).toDateString()}</p>
                        <p className='text3'>Total number of days: {days} </p>
                    </div>
                </div>
                <div>
                    <p className='text'>Security Deposit: {selected.security_deposit}</p>
                    <p className='text'>Price: {selected.price}</p>
                    <p className='text'>Total Price for {days} days: $ {selected.price.slice(1) * days}.00</p>
                </div>
            </div>
            <div>
                <button className='res' onClick={handlePayment}>Reserve</button>
            </div>
        </div>
    )
}

export default NextPage