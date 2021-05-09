import React from 'react';

const AddMessage = (props) => {
    const onSubmit = (event) => {
        event.preventDefault();
        const message = event.target.children[0].children[0].value.trim();
        if (message.length > 0) {
            props.addMessage(message);
        }
        event.target.children[0].children[0].value = "";
    };
    return (
        <form onSubmit={onSubmit}>
            <div className="message-input">
                <input />
                <button type="submit">Send</button>
            </div>
        </form>
    );
};

export default AddMessage;