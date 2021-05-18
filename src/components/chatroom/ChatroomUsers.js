import React, { useContext, useEffect, useState } from 'react';
import { ChatroomContext } from '../../context/ChatRoomContext';
import PrivateMessage from './PrivateMessage';
import SearchUsers from './SearchUsers';

const ChatroomUsers = (props) => {
    const { chatroomState } = useContext(ChatroomContext);
    const [usersToDisplay, setUsersToDisplay] = useState([...chatroomState.users]);
    const [privateMessageUser, setPrivateMessageUser] = useState(null);

    useEffect(() => {
        setUsersToDisplay([...chatroomState.users]);
    }, [chatroomState.users]);

    const searchUsers = (searchValue) => {
        const users = [...chatroomState.users];
        setUsersToDisplay(searchValue === "" ?
            users :
            users.filter((user) => user.username.toLowerCase().includes(searchValue)));
    };

    const sendPrivateMessage = () => {
        setPrivateMessageUser(null);
    };

    return (
        <div className="chatroom__users">
            <h3>Users</h3>
            <SearchUsers searchUsers={ searchUsers } />
            {usersToDisplay.map((user) => (
                <div
                    className="user"
                    key={ user.id }
                    onClick={ () => {
                        setPrivateMessageUser(user);
                    } }
                >
                    {user.username }
                </div>
            )) }
            {
                !!privateMessageUser &&
                <PrivateMessage
                    user={ privateMessageUser }
                    sendPrivateMessage={ sendPrivateMessage }
                />
            }
        </div>
    );
};

export default ChatroomUsers;
