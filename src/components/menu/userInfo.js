import { useState } from "react";
import userProfilePic from "../../assets/profilePictures/man-selfie.jpeg";
import SettingsIcon from '@mui/icons-material/Settings';

export default function UserInfo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="menu__userInfo">
            <img src={userProfilePic} alt="profile pic" />
            <div className="menu__userInfo__name">
                <h2>Bill Bradford</h2>
                <SettingsIcon color="inherit" />
            </div>
            <p className="menu__userInfo__job">Lead UX/UI Designer</p>

            <div className="menu__userInfo__status">
                <label className="menu__userInfo__toggle">
                    <input 
                        type="checkbox"
                        onChange={(e) => setChecked(e.target.checked)}
                        checked={checked} />
                    <span className="menu__userInfo__toggle__slider"></span>
                </label>
                <p className="menu__userInfo__status__text">{checked? "Active" : "Inactive"}</p>
            </div>
        </div>
    );
}