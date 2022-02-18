export default function ConvoThumbnail(props) {
    return (
        <div>
            <img src={props.user.picture} alt="profile pic" />
            <p>{props.user.name}</p>
            {props.user.unreadMsgs > 0 && <span>{props.user.unreadMsgs}</span>}
        </div>
    )
}