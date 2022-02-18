import logo from "../../assets/chatLogo.png"

export default function Header() {
    return (
        <div className="menu__header">
            <img src={logo} alt="logo" />
            <h1 className="menu__header__appName">QuickChat</h1>
        </div>
    )
}