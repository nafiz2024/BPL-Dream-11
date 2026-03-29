import React from 'react';
import Card from "../../../ui/Card"


const AvalaiblePlayers = ({ playersData, setCoin, coin }) => {
    console.log(playersData)
    return (
        <div className='grid lg:grid-cols-3 gap-10'>
            {playersData.map((player) => {
                return <Card player={player} setCoin={setCoin} coin={coin}></Card>
            })}


        </div>
    );
};

export default AvalaiblePlayers;