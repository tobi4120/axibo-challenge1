import { useState, useEffect, useRef } from "react";
import bill from "../../assets/profilePictures/man-selfie.jpeg";
import henry from "../../assets/profilePictures/henry.jpeg";
import AttachmentIcon from '@mui/icons-material/Attachment';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';

export default function Chat() {
    const [newMsgInput, setNewMsgInput] = useState("");
    const [convo, setConvo] = useState([
        { picture: bill, message: "Hi Henry!!", activeUser: true, lastSent: "9h ago" },
        { picture: bill, message: "How can I help you today?", activeUser: true, lastSent: "9h ago" },
        { picture: henry, message: "Hey Bill, nice to meet you!", activeUser: false, lastSent: "9h ago" },
        { picture: henry, message: "Hope you're doing fine.", activeUser: false, lastSent: "9h ago" },
        { picture: bill, message: "I'm good thanks for asking.", activeUser: true, lastSent: "9h ago" },
        { picture: henry, message: "I am interested to know more about your prices and services you offer", activeUser: false },
        { picture: bill, message: "Sure please check below link to find more useful information", 
          link: "http://mazepixel.com/portfolio", activeUser: true, lastSent: "9h ago" },
        { picture: henry, message: "Awesome, will get in touch if there's anything unclear. Thanks for now!", 
          activeUser: false, lastSent: "9h ago" },
        { picture: henry, message: "Have a great day!", activeUser: false, lastSent: "9h ago" },
        { picture: bill, message: "Thanks buddy, you too as well", activeUser: true, lastSent: "9h ago" },
    ])
    const messagesEndRef = useRef(null);

    useEffect(() => {
        scrollToBottom();
    }, [convo])

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView()
    }

    const sendMsg = () => {
        // Don't send a blank message
        if (!newMsgInput) return

        // Clear input
        setNewMsgInput("");

        // Create a new msg object and append it to the conversation array
        const newMsg = { picture: bill, message: newMsgInput, activeUser: true, lastSent: "1m ago" }
        setConvo([...convo, newMsg])
    }   

    // Send message when user hits 'enter' key
    const handleKeyDown = (e) => {
        if (e.code === "Enter") {
            e.preventDefault();
            sendMsg();
        } 
    }

    return (
        <div className="chat">

            {/* Messages */}
            <div className="chat__messages">
                {convo.map((convo, index) => {
                    return (
                        <div key={index} className={convo.activeUser? "chat__messages__message activeUser" : 
                                                          "chat__messages__message"}>

                            {/* Chat profile picture */}
                            <div className="chat__messages__picture">
                                <img src={convo.picture} alt="profile pic" />
                                <span className="chat__messages__picture__greenDot"></span>
                            </div>

                            {/* Chat message */}
                            <div className="chat__messages__message__content">
                                <div className={convo.activeUser? "msg-txt activeUserMsg": "msg-txt otherUserMsg"}>
                                    <p>{convo.message}</p>

                                    {/* Links */}
                                    {convo.link &&
                                        <div>
                                            <p className="blank space"> </p>
                                            <a href={convo.link}>{convo.link}</a>
                                        </div>
                                    }
                                </div>

                                {/* Last sent */}
                                <p className="timeSent">{convo.lastSent}</p>
                            </div>
                        </div>
                    )
                })}
                <div ref={messagesEndRef} />
            </div>

            {/* New message input */}
            <div className="chat__newMessage">

                {/* Add attachment */}
                <div className="chat__newMessage__addAttachment">
                    <AttachmentIcon
                        color="inherit" />
                </div>

                {/* New message input */}
                <div className="chat__newMessage__input">
                    <textarea 
                        type="text"
                        placeholder="Enter your message here"
                        rows="1"
                        value={newMsgInput}
                        onChange={(e) => setNewMsgInput(e.target.value)}
                        onKeyDown={handleKeyDown} />

                    {/* Emoji */}
                    <div className="chat__newMessage__input__emoji">
                        <InsertEmoticonIcon
                            color="inherit" />
                </div>
                </div>

                {/* Send message */}
                <div className="chat__newMessage__sendMsg" onClick={(e) => sendMsg(e)}>
                    <p>Send</p>
                    <div className="chat__newMessage__sendMsg__icon">
                        <SendIcon 
                            color="inherit"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}