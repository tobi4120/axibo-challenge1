import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from '@mui/icons-material/Inventory';

export default function ChatInfo() {
    return (
        <div className="chatInfo">
            <div className="userInfo chatInfo__content">
                {/* Initials */}
                <span className="chatInfo__content__initials">HB</span>

                {/* Email */}
                <div className="chatInfo__content__email">
                    <MailOutlineIcon
                        color="inherit" />
                    <p>henryboyd@gmail.com</p>
                </div>

                {/* Name */}
                <div className="chatInfo__content__name">
                    <AccountCircleIcon
                        color="inherit" />
                    <p>Henry Boyd</p>
                </div>

                {/* Archive */}
                <div className="chatInfo__content__archive">
                    <p>Archive</p>
                    <InventoryIcon
                        color="inherit" />
                </div>
            </div>
        </div>
    )
}