import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { initRoomAction } from '../actions/chatroomActions';
import chatroomReducer, { initialchatroomState } from '../reducers/chatroomReducer';
import { getRoomData } from '../server/db';
import { LoginContext } from './LoginContext';

export const ChatroomContext = createContext();

const ChatroomContextProvider = (props) => {
    const { userData } = useContext(LoginContext);
    const [chatroomState, chatroomDispatch] = useReducer(chatroomReducer, initialchatroomState);
    const history = useHistory();

    useEffect(() => {
        let isComponentExist = true;
        getRoomData(props.roomId, userData.token).then(
            (roomData) => {
                if (isComponentExist) chatroomDispatch(initRoomAction(roomData));
            },
            (err) => {
                if (err.message === "Room not found") {
                    history.push("/notfound");
                }
            }
        );

        return () => {
            isComponentExist = false;
        };
    }, [props.roomId, history, userData.token]);

    return (
        <ChatroomContext.Provider value={ { chatroomState, chatroomDispatch } }>
            { props.children }
        </ChatroomContext.Provider>
    );
};

export default ChatroomContextProvider;