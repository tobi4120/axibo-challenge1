import logo from "../assets/chatLogo.png"

export default function Header() {
    return (
        <div>
            <img src={logo} alt="logo" />
            <h1>QuickChat</h1>
        </div>
    )
}