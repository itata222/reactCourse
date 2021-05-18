// import { nanoid } from 'nanoid';
import React, { useContext } from 'react';
import { ChatroomContext } from '../../context/ChatRoomContext';
import ChatroomMain from './ChatroomMain';
import ChatroomUsers from './ChatroomUsers';
import Loader from '../main/Loader';

const Chatroom = (props) => {
    // const roomName = props.roomName;
    // const myUser = {
    //     username: "ReactIsTheBest",
    //     id: "11"
    // };
    // const users = [
    //     {
    //         username: "Moshe",
    //         id: nanoid()
    //     },
    //     {
    //         username: "Natan",
    //         id: nanoid()
    //     },
    //     {
    //         username: "Shir",
    //         id: nanoid()
    //     },
    //     {
    //         username: "Michal",
    //         id: nanoid()
    //     }
    // ];
    // const [messages, setMessages] = useState([
    //     {
    //         message: "Hi",
    //         id: nanoid(),
    //         user: users[1]
    //     },
    //     {
    //         message: "Hello",
    //         id: nanoid(),
    //         user: myUser
    //     }
    // ]);

    // const addMessage = (messageContent) => {
    //     setMessages(messages.concat({
    //         message: messageContent,
    //         id: nanoid(),
    //         user: myUser
    //     }));
    // };

    // const deleteMessage = (index) => {
    //     const newMessages = [...messages];
    //     newMessages.splice(index, 1);
    //     setMessages(newMessages);
    // };

    const { chatroomState } = useContext(ChatroomContext);

    return (
        <div className="chatroom-container">
            {
                chatroomState.isRoomExist ?
                    <div className="chatroom">
                        <ChatroomUsers
                        // users={ users }
                        />
                        <ChatroomMain
                        // roomName={ roomName }
                        // messages={ messages }
                        //userId={ myUser.id }
                        // addMessage={ addMessage }
                        // deleteMessage={ deleteMessage }
                        />
                    </div> :
                    <Loader />
            }
        </div>
    );
};

export default Chatroom;