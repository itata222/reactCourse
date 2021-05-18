import React, { useContext, useEffect } from 'react';
import { ChatroomContext } from '../../context/ChatRoomContext';
import AddMessage from './AddMessage';
import Message from './Message';

const ChatroomMain = (props) => {
    const { chatroomState } = useContext(ChatroomContext);
    // const contextValue = useContext(ChatroomContext);
    useEffect(() => {
        console.log("chatroomMain rendering");
    });

    useEffect(() => {
        console.log("chatroommain is born");

        return () => {
            console.log("chatroom died :( ");
        };
    }, []);

    useEffect(() => {
        console.log("chatroomMain: a change in messages");

        return () => {
            console.log("messages cleanup");
        };
    }, [chatroomState.messages]);

    return (
        <div className="chatroom__main">
            <div>
                <h3>Room Name: { chatroomState.name }</h3>
                { chatroomState.messages.map((message, i) => (
                    <Message
                        key={ message.id }
                        message={ message }
                        //userId={ props.userId }
                        // deleteMessage={ props.deleteMessage }
                        index={ i }
                    />
                )) }
            </div>
            <AddMessage addMessage={ props.addMessage } />
        </div>
    );
};

export default ChatroomMain;