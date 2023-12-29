import React, { useState } from "react";
import purple from "./images/bg-main-desktop.png"
import front from "./images/bg-card-front.png"
import back from "./images/bg-card-back.png"
import {Link} from "react-router-dom"

export default function Card(){

    const [name, setName] = useState("")
    const [num, setNum] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
    const [cvv, setCvv] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.value);
      };
    
      const handleNumChange = (e) => {
        setNum(e.target.value);
      };
    
      const handleMonthChange = (e) => {
        setMonth(e.target.value);
      };
    
      const handleYearChange = (e) => {
        setYear(e.target.value);
      };
    
      const handleCvvChange = (e) => {
        setCvv(e.target.value);
      };

    return(
        <div className="w-screen items-center flex flex-row-reverse first-letter:justify-between">
            <div className="w-1/2 h-screen mt-0 flex flex-col pl-24 pt-44">
                <p className=" font-extralight mb-2">CARDHOLDER NAME</p>
                <input type="text" className="border-[0.125rem] border-gray-400 h-10 w-1/2 rounded-lg mb-4 pl-2" placeholder="eg. Poli sai harshith" value={name} onChange={handleNameChange}/>
                <p className="font-extralight mb-2">CARD NUMBER</p>
                <input type="text" className="border-[0.125rem] border-gray-400 h-10 w-1/2 rounded-lg mb-4 pl-2" placeholder="eg. 1234 5678 1234 5678" minLength={19} maxLength={19} value={num} onChange={handleNumChange}/>
                <div className="flex">
                    <p className="font-extralight mb-2 mr-32">EXP. DATA(DD/MM)</p>
                    <p className="font-extralight mb-2">CVV</p>
                </div>
                <div className="flex">
                    <input type="text" className="border-[0.125rem] border-gray-400 h-10  rounded-lg w-2/12 mr-2 pl-2" placeholder="MM" minLength={2} maxLength={2} value={month} onChange={handleMonthChange}/>
                    <input type="text" className="border-[0.125rem] border-gray-400 h-10  rounded-lg w-2/12 mr-10 pl-2" placeholder="YYYY" minLength={4} maxLength={4} value={year} onChange={handleYearChange}/>
                    <input type="text" className="border-[0.125rem] border-gray-400 h-10  rounded-lg w-3/12 pl-2" placeholder="eg. 000" minLength={3} maxLength={3} value={cvv} onChange={handleCvvChange}/>
                </div>
                <Link to="/thankyou"><button className="border-2 mt-16 w-4/6 h-12 bg-fuchsia-950 text-white border-none rounded-xl">Confirm</button></Link>
            </div>
            <div className="relative w-1/2">
                <img src={purple} />
                <img src={front} className="absolute top-44 left-48"/>
                <img src={back} className="absolute left-72 top-2/4"/>
                <p className="absolute text-3xl text-white top-72 left-52 gap-9 mr-10 ml-8 font-mono">{num}</p>
                <p className="absolute text-xl text-white top-[23rem] left-52 font-light ml-8 font-mono">{name}</p>
                <p className="absolute text-xl text-white top-[23rem] left-[32.25rem] font-light font-mono">{month}</p>
                <p className="absolute text-xl text-white top-[23rem] left-[34rem] font-light font-mono">/</p>
                <p className="absolute text-xl text-white top-[23rem] left-[35rem] font-light font-mono">{year}</p>
                <p className="absolute text-lg text-white top-[34.80rem] left-[40rem] font-mono">{cvv}</p>
            </div>
        </div>
    )
}