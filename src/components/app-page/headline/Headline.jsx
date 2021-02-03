import PropTypes from "prop-types";
import NavbarLink from "../../nav/NavbarLink";
import {FormattedMessage} from "react-intl";
import style from "./Headline.module.css";
import {abbreviateNumber} from "../../../util/Formating";

const Headline = ({app_icon, app_title, install_count}) => {
    const {number: formattedInstallCountNumber, string: formattedInstallCountString} = abbreviateNumber(install_count)

    return (
        <div className={style.headline}>
            <div className={style.headline__iconWrapper}><img src={app_icon} alt="App Icon"/></div>
            <div>
                <h1>{app_title}</h1>
                <p>
                    {install_count !== 0 ? formattedInstallCountString : ''}
                    <FormattedMessage
                        id="download_count"
                        defaultMessage="{count,plural,=0{No downloads} one{ download} other{ downloads}}"
                        values={{count: formattedInstallCountNumber}}
                    />
                </p>
            </div>
        </div>
    )
}

NavbarLink.propTypes = {
    app_icon: PropTypes.string.isRequired,
    app_title: PropTypes.string.isRequired,
    download_count: PropTypes.number.isRequired
}

export default Headline;