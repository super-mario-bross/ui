import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import styles from './index.scss';

const ReviewStars = ({ reviewRate, reviewCount, maximumCount, changeRating }) => {
  return (
    <div className="d-inline">
      <StarRatings
        rating={reviewRate}
        starRatedColor='rgb(109, 122, 130)'
        starEmptyColor='rgb(203, 211, 227)'
        starHoverColor='rgb(230, 67, 47)'
        starDimension='20px'
        starSpacing='5px'
        changeRating={changeRating}
        numberOfStars={maximumCount}
        name='rating'
      />
      { reviewCount && <p className="d-inline align-middle review-count m-0">({reviewCount})</p>}
    </div>
  );
};

ReviewStars.propTypes = {
  maximumCount: PropTypes.number,
  reviewRate: PropTypes.number,
  reviewCount: PropTypes.number,
  changeRating: PropTypes.func
};

ReviewStars.defaultProps = {
  maximumCount: 5,
  reviewRate: 0,
  reviewCount: 0,
  changeRating: () => { }
};

export default ReviewStars;
