import React from "react";
import icici from "./images/icici.png"
import hdfc from "./images/hdfc.png"
import sbi from "./images/sbi.png"
import union from "./images/union.png"
import { Link } from "react-router-dom";

export default function StartingPage(){
    return(
        <div className=" w-screen items-center flex flex-col justify-center justify-items-center mr-10 p-4">
            <h1 className="text-6xl mb-3">Select bank of you choice</h1>
            <div className="flex flex-col">
                <Link to="/cardDetails"><img className=" w-40 mb-5 transition-transform transform hover:scale-110" src={icici}/></Link>
                <Link to="/cardDetails"><img className=" w-40 mb-5 transition-transform transform hover:scale-110" src={hdfc}/></Link>
                <Link to="/cardDetails"><img className=" w-40 mb-5 transition-transform transform hover:scale-110" src={sbi}/></Link>
                <Link to="/cardDetails"><img className=" w-40 mb-5 transition-transform transform hover:scale-110" src={union}/></Link>
            </div>
            
        </div>
    )
}