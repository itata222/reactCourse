import { nanoid } from 'nanoid';
import React from 'react';

const Rooms = () => {
    const rooms = [
        {
            name: 'Sport'
        },
        {
            name: 'Stocks'
        },
        {
            name: 'Economics'
        }
    ]
    return (
        <div className='roomsContainer'>
            <h3>Rooms:</h3>
            {rooms.map((room) => (
                <div key={nanoid()} className='room'>
                    {room.name}
                </div>
            ))}
        </div>
    )
}

export default Rooms