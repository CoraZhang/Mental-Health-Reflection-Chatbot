import React from 'react';
import './ChatMessage.css';
import BotIcon from "../BotIcon.png";
import UserIcon from "../UserIcon.png";

const ChatMessage = ({ msg: { id, sender, receiver, message } }) => {
    return (
        sender === "Bot" ? (
            <div className="msgContainer leftJustify">
                <div className="bot-messages-img">
                    <img src={BotIcon} alt="chatbot icon"/>
                
                <div className="sender-label bot-msg-label">ReflectBot</div>
                </div>
                <div className="msgBubble botBubbleColor">
                    <div className="msgText botText display-linebreak">{message}</div>
                </div>
            </div>
        )
            : (
                <div className="msgContainer rightJustify">
                    <div className="msgBubble userBubbleColor">
                        <div className="msgText userText display-linebreak">{message}</div>
                    </div>
                    <div className="bot-messages-img">
                        <img src={UserIcon} alt="user icon"/>

                        <div className="sender-label user-msg-label">User</div>
                    </div>
                </div>
            )
    )

}

export default ChatMessage;