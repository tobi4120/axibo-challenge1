import { useState } from "react";
import ConvoThumbnail from "./convoThumbnail";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import henry from "../../assets/profilePictures/henry.jpeg";
import martha from "../../assets/profilePictures/martha.jpeg";
import phillip from "../../assets/profilePictures/phillip.jpeg";
import christine from "../../assets/profilePictures/christine.jpeg";
import jerry from "../../assets/profilePictures/jerry.jpeg";
import russell from "../../assets/profilePictures/russell.jpeg";

export default function Conversations() {
    const [users, setUsers] = useState([
        { "name": "Henry Boyd", "picture": henry, "unreadMsgs": 0 },
        { "name": "Martha Curtis", "picture": martha, "unreadMsgs": 2 },
        { "name": "Phillip Tucker", "picture": phillip, "unreadMsgs": 0 },
        { "name": "Christine Reid", "picture": christine, "unreadMsgs": 0 },
        { "name": "Jerry Guzman", "picture": jerry, "unreadMsgs": 0 },
        { "name": "Russell Williams", "picture": russell, "unreadMsgs": 0 }
    ])

    return (
        <div className="menu__conversations">
            <div className="activeConversations">
                <h3>Active conversations</h3>
                <span>4</span>
                <ChevronLeftIcon />
            </div>

            {/* Conversations */}
            <div className="menu__conversations__list">
                {users.map((user, index) => {
                    return (
                        <ConvoThumbnail 
                            key={index}
                            user={user} />
                    )
                })}
            </div>
            <div className="archivedConversations">
                <h3>Archived conversations</h3>
                <span>7</span>
                <ChevronLeftIcon />
            </div>
        </div>
    )
}