import React from 'react';
import Card from "../../../ui/Card"


const AvalaiblePlayers = ({ playersData, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {

    return (
        <div className='grid lg:grid-cols-3 gap-10'>
            {playersData.map((player, ind) => {

                return <Card key={ind} player={player} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></Card>
            })}


        </div>
    );
};

export default AvalaiblePlayers;