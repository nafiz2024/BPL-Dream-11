import React from 'react';
import logoImg from "../../assets/logo.png";
import dollerImg from "../../assets/Currency.png";

const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <div className="navbar">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl"><img src={logoImg} alt="" srcset="" /></a>
                </div>
                <div className="flex gap-12 items-center">
                    <ul className='flex gap-12'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Fixture</a></li>
                        <li><a href="">Teams</a></li>
                        <li><a href="">Schedules</a></li>
                    </ul>
                    <button className="py-4 px-5  flex justify-between items-center gap-2.5 border border-[#131313]/10 rounded-xl font-semibold text-[#131313]">
                        0 Coins
                        <img src={dollerImg} alt="" srcset="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;