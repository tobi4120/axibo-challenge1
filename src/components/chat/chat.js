import { useState } from "react";
import bill from "../../assets/profilePictures/man-selfie.jpeg";
import henry from "../../assets/profilePictures/henry.jpeg";

export default function Chat() {
    const [convo, setConvo] = useState([
        { picture: bill, message: "Hi Henry!!", activeUser: true },
        { picture: bill, message: "How can I help you today?", activeUser: true },
        { picture: henry, message: "Hey Bill, nice to meet you!", activeUser: false },
        { picture: henry, message: "Hope you're doing fine.", activeUser: false },
        { picture: bill, message: "I'm good thanks for asking.", activeUser: true },
        { picture: henry, message: "I am interested to know more about your prices and services you offer", activeUser: false },
        { picture: bill, message: "Sure please check below link to find more useful information", link: "http://mazepixel.com/portfolio", activeUser: true },
        { picture: henry, message: "Awesome, will get in touch if there's anything unclear. Thanks for now!", activeUser: false },
        { picture: henry, message: "Have a great day!", activeUser: false },
        { picture: bill, message: "Thanks buddy, you too as well", activeUser: true },
    ])

    return (
        <div className="chat">
            <div className="chat__messages">
                {convo.map(convo => {

                    // Active user
                    if (convo.activeUser)
                        return (
                            <div className="chat__messages__message">
                                <div className="chat__messages__message__content">
                                    <p>{convo.message}</p>
                                    <p>9h ago</p>
                                </div>
                                <img src={convo.picture} />
                            </div>
                        )
                    
                    // Other user
                    return (
                        <div className="chat__messages__message">
                            <img src={convo.picture} />
                            <div className="chat__messages__message__content">
                                <p>{convo.message}</p>
                                <p>9h ago</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}