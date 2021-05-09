import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import ChatroomMain from './ChatroomMain';
import ChatroomUsers from './ChatroomUsers';

const Chatroom = () => {
    const roomName = "Bananas";
    const myUser = {
        username: "ReactIsTheBest",
        id: "11"
    };
    const users = [
        {
            username: "Moshe",
            id: nanoid()
        },
        {
            username: "Natan",
            id: nanoid()
        },
        {
            username: "Shir",
            id: nanoid()
        },
        {
            username: "Michal",
            id: nanoid()
        }
    ];
    const [messages, setMessages] = useState([
        {
            message: "Hi",
            id: nanoid(),
            user: users[1]
        },
        {
            message: "Hello",
            id: nanoid(),
            user: myUser
        }
    ]);

    const addMessage = (messageContent) => {
        setMessages(messages.concat({
            message: messageContent,
            id: nanoid(),
            user: myUser
        }));
    };

    const deleteMessage = (index) => {
        const newMessages = [...messages];
        newMessages.splice(index, 1);
        setMessages(newMessages);
    };

    return (
        <div className="chatroom">
            <ChatroomUsers users={users} />
            <ChatroomMain
                roomName={roomName}
                messages={messages}
                userId={myUser.id}
                addMessage={addMessage}
                deleteMessage={deleteMessage}
            />
        </div>
    );
};

export default Chatroom;