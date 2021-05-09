import React from 'react';

const PrivateMessage = ({ user, sendPrivateMessage }) => {
    return (
        <div className="private-message">
            <div className="private-message__body">
                <h4>Private Message to: {user.username}</h4>
                <textarea rows="5" placeholder="Send a message..."></textarea>
                <button onClick={() => { sendPrivateMessage(); }}>Send</button>
            </div>
        </div>
    );
};

export default PrivateMessage;