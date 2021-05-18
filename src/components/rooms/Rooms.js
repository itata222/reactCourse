// import { nanoid } from 'nanoid';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { setRoomsAction } from '../../actions/roomsActions';
import { LoginContext } from '../../context/LoginContext';
import roomsReducer from '../../reducers/roomsReducer';
import { getRoomsFromDB, postRoomInDB } from '../../server/db';
import Loader from '../main/Loader';
// import Axios from 'axios';

const Rooms = (props) => {
    // const [rooms, setRooms] = useState([
    //     {
    //         name: "bananas",
    //         id: nanoid()
    //     },
    //     {
    //         name: "cats",
    //         id: nanoid()
    //     }
    // ]);
    const { userData } = useContext(LoginContext);
    const [rooms, dispatcRooms] = useReducer(roomsReducer, []);
    const [isRoomLoaded, setIsRoomLoaded] = useState(false);
    const history = useHistory();

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             for (let room of rooms) {
    //                 const res = await Axios.post(process.env.REACT_APP_DB + "rooms.json", room);
    //                 console.log(res.data);
    //             }
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     })();

    // }, [rooms]);

    useEffect(() => {
        let isComponentExist = true;
        getRoomsFromDB(userData.token).then((rooms) => {
            if (isComponentExist) {
                dispatcRooms(setRoomsAction(rooms));
                setIsRoomLoaded(true);
            }
        });

        // console.log(userData.token);
        return () => {
            isComponentExist = false;
        };
    }, [userData.token]);

    const onSubmitInputNewRoom = (event) => {
        event.preventDefault();
        const name = event.target.children[0].value.trim();
        if (name.length > 0) {
            // props.history.push("/chatroom/" + name);
            // setRooms(rooms.concat({
            //     name,
            //     id: nanoid()
            // }));
            // dispatcRooms(addRoomAction({
            //     name,
            //     id: nanoid()
            // }));

            postRoomInDB(name, userData.token).then((roomId) => {
                history.push("/chatroom/" + roomId);
            });
        }

    };

    return (
        <div className="rooms">
            <div className="rooms__section">
                <h3>Choose room:</h3>
                {
                    rooms.map((room) => (
                        <div className="room" key={ room.id }>
                            <Link to={ "/chatroom/" + room.id }>{ room.name }</Link>
                        </div>
                    ))
                }
            </div>
            <div className="rooms__section">
                <h3>Create room:</h3>
                <form onSubmit={ onSubmitInputNewRoom }>
                    <input className="rooms__input-new" placeholder="new room" />
                    <button type="submit" className="rooms__button-new">Create</button>
                </form>
                <Link to="/login">Login example link</Link>
            </div>
            {!isRoomLoaded && <Loader /> }
        </div >
    );
};

export default Rooms;


// צרו פונקציה ששואבת פרטים של חדר ספציפי,
// מקמו את הפונקציה במקום הנכון באתר ודאגו לכך שתאכלס את הצ'אט רום במה שצריך.
// אם מנסים להיכנס לחדר שאינו קיים אז מופנים אל 404