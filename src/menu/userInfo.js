import userProfilePic from "../assets/profilePictures/man-selfie.jpeg";

export default function userInfo() {
    return (
        <div>
            <img src={userProfilePic} alt="profile pic" />
            <div className="name">
                <h2>Bill Bradford</h2>
            </div>
        </div>
    );
}