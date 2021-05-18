import React from 'react';
import ChatroomContextProvider from '../../context/ChatRoomContext';
import Chatroom from './Chatroom';

const ChatroomLoader = (props) => {
    const roomId = props.match.params.id;

    return (
        <ChatroomContextProvider roomId={ roomId }>
            <Chatroom />
        </ChatroomContextProvider>
    );
};

export default ChatroomLoader;