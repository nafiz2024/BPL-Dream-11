import React from 'react';
import Card from "../../../ui/Card"


const AvalaiblePlayers = ({ playersData }) => {
    console.log(playersData)
    return (
        <div className='grid lg:grid-cols-3 gap-10'>
            {playersData.map((player) => {
                return <Card player={player}></Card>
            })}


        </div>
    );
};

export default AvalaiblePlayers;