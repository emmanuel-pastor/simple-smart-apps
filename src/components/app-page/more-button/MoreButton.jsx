import style from "./MoreButton.module.css";
import ArrowIcon from "../../../assets/images/shared/arrow.svg";
import {FormattedMessage} from "react-intl";
import PropTypes from "prop-types";

const MoreButton = ({isOpen, onClick}) => {
    return (
        <div className={style.seeMoreButton} onClick={onClick}>
            <p>{isOpen ? <FormattedMessage id="see_less" defaultMessage="See less"/>
                : <FormattedMessage id="see_more" defaultMessage="See more"/>}
            </p>
            <img src={ArrowIcon} alt={'Arrow icon'} style={{transform: isOpen ? 'rotate(-180deg)' : ''}}/>
        </div>
    )
}

MoreButton.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default MoreButton;