import React, { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

const card = ({ player, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleChoosePlayer = () => {
        let newCoin = coin - player.price
        if (newCoin >= 0) {
            setCoin(coin - player.price)
        } else {
            toast.error("Not Wnough Coin to Purchase This Player")
            return;
        }
        toast.success(`${player.playerName} is Selected`)
        setIsSelected(true);
        setSelectedPlayers([...selectedPlayers, player])
    }

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm p-6">
                <figure className='rounded-2xl pb-6'>
                    <img
                        className='w-[376px] h-[240px]'
                        src={player.playerImage}
                        alt="Shoes" />
                </figure>
                <div className="flex flex-col gap-4">
                    <h2 className="flex items-center text-xl font-semibold">
                        <FaUser />
                        {player.playerName}
                    </h2>
                    <div className="flex justify-between">
                        <p className='flex items-center gap-3 text-[#D9D9D9]'>
                            <FaFlag />
                            {player.playerCountry}
                        </p>
                        <p className='text-sm py-2.5 px-4 bg-[#131313]/5 rounded-lg'>
                            {player.playerType}
                        </p>
                    </div>
                    <div className='divider'></div>
                    <h1 className='font-bold'>Rating - {player.rating}</h1>
                    <div className="flex justify-between">
                        <h1 className='font-bold'>{player.battingStyle}</h1>
                        <h1 className='text-[#D9D9D9]'>{player.bowlingStyle}</h1>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1 className='font-bold'>Price: ${player.price}</h1>
                        <button
                            className="btn btn-soft"
                            onClick={handleChoosePlayer}
                            disabled={isSelected ? true : false}
                        >
                            {isSelected === true ? "Selected" : "Choose Player"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default card;