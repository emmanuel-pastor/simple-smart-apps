import style from './DownloadButtons.module.css';
import NavbarLink from "../../nav/NavbarLink";
import PropTypes from "prop-types";
import DownloadIcon from "../../../assets/images/shared/download_icon.svg";
import {FormattedMessage, useIntl} from "react-intl";
import {useState} from "react";
import {firebaseAnalytics, firebaseStorage} from "../../../index";
import {toSnakeCase} from "../../../util/Formating";
import play_badge from "../../../assets/images/shared/google_play_badge.svg";

const DownloadButtons = ({appName, playLink, apkLink, playBadgePath}) => {
    const [downloadUrl, setDownloadUrl] = useState("#")

    let apkRef = firebaseStorage.ref().child(apkLink)
    const getDownloadLink = () => {
        apkRef.getDownloadURL()
            .then(url => {
                setDownloadUrl(url)
            })
            .catch((error) => {
                //Handle error
            });
    }

    const logDownloadEvent = () => {
        firebaseAnalytics.logEvent(`${toSnakeCase(appName)}_apk_download`)
    }

    //Retrieve APK download link form Firestore
    getDownloadLink()

    return (
        <div className={style.downloadButtons__wrapper}>
            {playLink && <a href={playLink} className={style.downloadButtons__button_play} target={'_blank'} rel={'noopener noreferrer'}>
                <img alt='Get it on Google Play' src={playBadgePath ?? play_badge}/>
            </a>}
            <a href={downloadUrl} datatype={"application/octet-stream"} className={style.downloadButtons__button_apk} onClick={logDownloadEvent}>
                <img src={DownloadIcon} alt={"Download icon"}/>
                <FormattedMessage
                    id="download_apk"
                    defaultMessage="Download APK"
                />
            </a>
        </div>
    )
}

NavbarLink.propTypes = {
    appName: PropTypes.string.isRequired,
    playLink: PropTypes.string,
    apkLink: PropTypes.string.isRequired,
    playBadgePath: PropTypes.string
}

export default DownloadButtons;