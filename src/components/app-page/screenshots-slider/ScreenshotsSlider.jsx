import PropTypes from "prop-types";
import style from "./ScreenshotsSlider.module.css";

const ScreenshotsSlider = ({screenshots}) => {
    return(
        <div className={style.screenshotsSlider}>
            {screenshots.map((path, index) => (
                <img key={index} src={path} alt={`Screenshot ${index+1}`}/>
            ))}
        </div>
    )
}

ScreenshotsSlider.prototype = {
    screenshots: PropTypes.arrayOf(PropTypes.string)
}

export default ScreenshotsSlider;