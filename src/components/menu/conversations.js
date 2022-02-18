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
        { "name": "Henry Boyd", "picture": henry, "unreadMsgs": 0, "active": true },
        { "name": "Martha Curtis", "picture": martha, "unreadMsgs": 2, "active": false },
        { "name": "Phillip Tucker", "picture": phillip, "unreadMsgs": 0, "active": false  },
        { "name": "Christine Reid", "picture": christine, "unreadMsgs": 0, "active": false  },
        { "name": "Jerry Guzman", "picture": jerry, "unreadMsgs": 0, "active": false  },
        { "name": "Russell Williams", "picture": russell, "unreadMsgs": 0, "active": false  }
    ])

    return (
        <div className="menu__conversations">
            <div className="menu__conversations__header">
                <div className="menu__conversations__header__name_and_num">
                    <h3>Active conversations</h3>
                    <span className="menu__conversations__header__num">4</span>
                </div>
                <span className="menu__conversations__header__up"><ChevronLeftIcon /></span>
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
            <div className="menu__conversations__header">
                <div className="menu__conversations__header__name_and_num">
                    <h3>Archived conversations</h3>
                    <span className="menu__conversations__header__num">7</span>
                </div>
                <span className="menu__conversations__header__down"><ChevronLeftIcon /></span>
            </div>
        </div>
    )
}