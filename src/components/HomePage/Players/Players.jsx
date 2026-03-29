import React, { use } from 'react';
import AvalaiblePlayers from './AvalaiblePlayers/AvalaiblePlayers';

const Players = ({ playersPromise }) => {

    const playersData = use(playersPromise)
    return (
        <div className='container mx-auto '>
            <AvalaiblePlayers playersData={playersData}></AvalaiblePlayers>            
        </div>
    );
};

export default Players;