import PropTypes from "prop-types";
import {FormattedMessage} from "react-intl";
import style from "./Rating.module.css";
import PersonIcon from "../../../assets/images/shared/person.svg";
import RatingStar from "../../../assets/images/shared/rating_star.svg";
import RatingStarGray from "../../../assets/images/shared/rating_star-gray.svg";

const Rating = ({rating, review_count, review_link}) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
        if (i < Math.ceil(rating).toFixed(0) - 1 || rating-1 === i) {
            stars.push(<img key={i} src={RatingStar} alt={'Star icon'}/>)
        } else if (i === Math.ceil(rating).toFixed(0) - 1) {
            stars.push(
                <div key={i} style={{backgroundImage: `url(${RatingStarGray})`}}>
                    <div style={{
                        backgroundImage: `url(${RatingStar})`,
                        width: `calc(${rating % 1}*(0.572vw + 13px))`
                    }}/>
                </div>
            )
        } else {
            stars.push(<img key={i} src={RatingStarGray} alt={'Star icon'}/>)
        }
    }

    return (
        <a className={style.ratingWrapper} href={review_link} target={'_blank'} rel={'noopener noreferrer'}>
            <h2>{parseFloat(rating).toFixed(1) ? rating : '-'}</h2>
            {<div className={style.ratingWrapper__stars}>{stars}</div>}
            <p>
                <img src={PersonIcon} alt={'Person icon'}/>
                <FormattedMessage
                    id="review_count"
                    defaultMessage="{count, plural, =0 {No reviews} one {# review} other {# reviews}}"
                    values={{count: review_count}}
                />
            </p>
        </a>
    )
}

Rating.propTypes = {
    rating: PropTypes.number,
    review_count: PropTypes.number.isRequired,
    review_link: PropTypes.string.isRequired
}

export default Rating;