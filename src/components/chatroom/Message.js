import React from 'react';

const Message = ({ message, userId, deleteMessage, index }) => {
    const isMyMessage = message.user.id === userId;

    const onClickDelete = () => {
        deleteMessage(index);
    };

    return (
        <div className={isMyMessage ? "my-message" : "message"}>
            {isMyMessage && <div onClick={onClickDelete} className="delete-message">x</div>}
            <div className="username">{message.user.username}</div>
            <div className="content">{message.message}</div>
        </div>
    );
};

export default Message;