import userProfilePic from "../assets/profilePictures/man-selfie.jpeg";
import SettingsIcon from '@mui/icons-material/Settings';

export default function userInfo() {
    return (
        <div>
            <img src={userProfilePic} alt="profile pic" />
            <div className="name">
                <h2>Bill Bradford</h2>
                <SettingsIcon />
                <p>Lead UX/UI Designer</p>
            </div>
        </div>
    );
}