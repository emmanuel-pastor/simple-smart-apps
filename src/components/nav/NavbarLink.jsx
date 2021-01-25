import style from './NavbarLink.module.css'
import {NavLink, useLocation} from 'react-router-dom'
import PropTypes from 'prop-types'

const NavbarLink = ({name, paths}) => {
    const {pathname} = useLocation();

    const isActive = paths.includes(pathname)

    return (
        <NavLink to={paths[0]} className={style.navbarLink} activeClassName={style.active} isActive={() => isActive}>
            <li>{name}</li>
            <div className={style.navbarLink__activeIndicator} style={{visibility: !isActive && 'hidden'}}/>
        </NavLink>
    )
}

NavbarLink.protoTypes = {
    name: PropTypes.string.isRequired,
    paths: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default NavbarLink