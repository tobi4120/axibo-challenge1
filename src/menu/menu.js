import Header from "./header";
import UserInfo from "../menu/userInfo";
import Conversations from "./conversations";

export default function Menu() {
    return (
        <div>
            <Header />
            <UserInfo />
            <Conversations />
        </div>
    );
}