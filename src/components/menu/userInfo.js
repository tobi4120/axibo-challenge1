import { useState } from "react";
import userProfilePic from "../../assets/profilePictures/man-selfie.jpeg";
import SettingsIcon from '@mui/icons-material/Settings';

export default function UserInfo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="userInfo">
            <img src={userProfilePic} alt="profile pic" />
            <div className="userInfo__name">
                <h2>Bill Bradford</h2>
                <SettingsIcon color="inherit" />
            </div>
            <p className="userInfo__job">Lead UX/UI Designer</p>

            <div className="userInfo__status">
                <label className="userInfo__toggle">
                    <input 
                        type="checkbox"
                        onChange={(e) => setChecked(e.target.checked)}
                        checked={checked} />
                    <span className="userInfo__toggle__slider"></span>
                </label>
                <p className="userInfo__status__text">{checked? "Active" : "Inactive"}</p>
            </div>
        </div>
    );
}