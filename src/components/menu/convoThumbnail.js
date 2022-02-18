export default function ConvoThumbnail(props) {
    return (
        <div className="convoThumbnail">
            <img src={props.user.picture} alt="profile pic" />
            <p className="convoThumbnail__name">{props.user.name}</p>
            {props.user.unreadMsgs > 0 && <span className="convoThumbnail__unread">{props.user.unreadMsgs}</span>}
        </div>
    )
}