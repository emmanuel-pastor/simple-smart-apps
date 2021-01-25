import style from './Navbar.module.css'
import Branding from '../../assets/images/SSA-branding.svg'
import NavbarLink from './NavbarLink'
import {NavigationPaths} from "../../router/NavigationPaths"
import {NavLink} from "react-router-dom";

const navbarLinks = [
    {
        id: 0,
        name: 'Daoda',
        paths: [NavigationPaths.DAODA, NavigationPaths.ROOT] // First path is main, others are extra
    },
    {
        id: 1,
        name: 'Battery Temperature',
        paths: [NavigationPaths.BATTERY_TEMP]
    }
]

const Navbar = () => {
    return (
        <nav>
            <NavLink to={NavigationPaths.ROOT} className={style.navbar__branding}><img src={Branding} alt={'Simple Smart Apps logo'}/></NavLink>

            {navbarLinks.map(link => (
                <NavbarLink key={link.id} {...link}/>
            ))}
        </nav>
    )
}

export default Navbar