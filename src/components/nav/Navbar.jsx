import style from './Navbar.module.css'
import Branding from '../../assets/images/shared/SSA_branding.svg'
import NavbarLink from './NavbarLink'
import {NavigationPaths} from "../../router/NavigationPaths"
import {NavLink} from "react-router-dom";
import {FormattedMessage} from "react-intl";

const navbarLinks = [
    {
        name: <FormattedMessage
            id="daoda"
            defaultMessage="Daoda"
        />,
        paths: [NavigationPaths.DAODA, NavigationPaths.ROOT] // First path is main, others are extra
    },
    {
        name: <FormattedMessage
            id="battery_temp"
            defaultMessage="Battery Temperature"
        />,
        paths: [NavigationPaths.BATTERY_TEMP]
    }
]

const Navbar = () => {
    return (
        <nav>
            <NavLink to={NavigationPaths.ROOT} className={style.navbar__branding}>
                <img src={Branding} alt={'Simple Smart Apps logo'}/>
            </NavLink>

            {navbarLinks.map((link, index) => (
                <NavbarLink key={index} {...link}/>
            ))}
        </nav>
    )
}

export default Navbar