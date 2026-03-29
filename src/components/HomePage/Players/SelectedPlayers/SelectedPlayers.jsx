import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin}) => {

const handleDeleteSelectedPlayer = (player) => {
    const filteredPayers = selectedPlayers.filter(
        (selectedPlayer) => selectedPlayer.playerName != player.playerName,
    )

    setSelectedPlayers(filteredPayers)
    setCoin(coin + player.price)
}

    return (
        <div className='space-y-6'>
            {selectedPlayers.map((player, index) => {
                return <div key={index}>
                    <div className="flex justify-between items-center p-6 border border-[#131313]/10 rounded-2xl">
                        <div className="flex items-center gap-6">
                            <img className='w-[80px] h-[80px] rounded-2xl' src={player.playerImage} alt="" srcset="" />
                            <div className="flex flex-col gap-3">
                                <h1 className='text-2xl font-semibold'>{player.playerName}</h1>
                                <p className='text-lg text-[#131313]/60'>{player.playerType}</p>
                            </div>
                        </div>
                        <button className='text-[#F14749] text-2xl' onClick={() => handleDeleteSelectedPlayer(player)}><RiDeleteBinLine /></button>
                    </div>
                </div>
            })}
        </div>
    );
};

export default SelectedPlayers;