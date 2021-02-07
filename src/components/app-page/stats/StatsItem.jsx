import style from "./StatsItem.module.css";
import PropTypes from "prop-types";

const StatsItem = ({title, value}) => {
    return(
        <div className={style.statsItem}>
            <p className={style.statsItem__title}>{title}</p>
            <p className={style.statsItem__value}>{value ? value : '-'}</p>
        </div>
    )
}

StatsItem.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node])
}

export default StatsItem;