import React, { useState } from 'react';
import PrivateMessage from './PrivateMessage';
import SearchUsers from './SearchUsers';

const ChatroomUsers = (props) => {
    const [usersToDisplay, setUsersToDisplay] = useState([...props.users]);
    const [privateMessageUser, setPrivateMessageUser] = useState(null);

    const searchUsers = (searchValue) => {
        const users = [...props.users];
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
            <SearchUsers searchUsers={searchUsers} />
            {usersToDisplay.map((user) => (
                <div
                    className="user"
                    key={user.id}
                    onClick={() => {
                        setPrivateMessageUser(user);
                    }}
                >
                    {user.username}
                </div>
            ))}
            {
                !!privateMessageUser &&
                <PrivateMessage
                    user={privateMessageUser}
                    sendPrivateMessage={sendPrivateMessage}
                />
            }
        </div>
    );
};

export default ChatroomUsers;
