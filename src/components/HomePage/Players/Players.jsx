import React, { use, useState } from 'react';
import AvalaiblePlayers from './AvalaiblePlayers/AvalaiblePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise }) => {

    const playersData = use(playersPromise)

    const [selectedType, setSelectedType] = useState("available")
    return (
        <div className='container mx-auto '>
            <div className="my-5 flex justify-between items-center">
                {selectedType === "available" ? (<h2 className='font-bold text-3xl'>Available Players</h2>
                ) : (
                    <h2 className='font-bold text-3xl'>Selected Players</h2>
                )}

                <div className="">
                    <button
                        onClick={() => setSelectedType("available")}
                        className={`btn  text-[#131313] ${selectedType === "available" ? "bg-[#E7FE29]" : "bg-[#FFFFFF]"}`}>
                        Avalaible
                    </button>
                    <button
                        onClick={() => setSelectedType("selected")}
                        className={`btn  text-[#131313] ${selectedType === "selected" ? "bg-[#E7FE29]" : "bg-[#FFFFFF]"}`}>
                        Selected (0)
                    </button>
                </div>
            </div>

            {selectedType === "available" ? (
                <AvalaiblePlayers playersData={playersData}></AvalaiblePlayers>
            ) : (
                <SelectedPlayers playersData={playersData}></SelectedPlayers>
            )}
        </div>
    );
};

export default Players;