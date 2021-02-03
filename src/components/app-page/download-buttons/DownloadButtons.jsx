import style from './DownloadButtons.module.css';
import NavbarLink from "../../nav/NavbarLink";
import PropTypes from "prop-types";
import DownloadIcon from "../../../assets/images/shared/download_icon.svg";
import {FormattedMessage, useIntl} from "react-intl";

const DownloadButtons = ({playLink, apkLink}) => {
    const intl = useIntl();

    return (
        <div className={style.downloadButtons__wrapper}>
            {playLink && <a href={playLink} className={style.downloadButtons__button_play}>
                <img alt='Get it on Google Play' src={intl.formatMessage(
                    {
                        id: 'play_badge_path',
                        defaultMessage: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg',
                    }
                )}/>
            </a>}
            <a href={apkLink} className={style.downloadButtons__button_apk}>
                <img src={DownloadIcon} alt={"Download icon"}/>
                <FormattedMessage
                    id="download_apk"
                    defaultMessage="Download APK"
                />
            </a>
        </div>
    )
}

NavbarLink.protoTypes = {
    playLink: PropTypes.string,
    apkLink: PropTypes.string.isRequired
}

export default DownloadButtons;