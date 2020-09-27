import React from 'react';
import PropTypes from 'prop-types';
import Ratings from 'react-ratings-declarative';
// import StarRatings from 'react-star-ratings';
import './index.scss';

const ReviewStars = ({ reviewRate, reviewCount, maximumCount, changeRating, showFraction }) => {
  return (
    <div className="d-inline">
      { showFraction && <p className="d-inline align-middle fraction m-0 font-weight-bold">{reviewRate}/{maximumCount}</p>}
      <Ratings
        rating={reviewRate}
        widgetRatedColors="#f8bf01"
        widgetDimensions="18px"
        widgetSpacings="4px"
        changeRating={changeRating}
      >
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
      </Ratings>
      { reviewCount && <p className="d-inline align-middle review-count m-0">({reviewCount})</p>}
    </div>
  );
};

ReviewStars.propTypes = {
  maximumCount: PropTypes.number,
  reviewRate: PropTypes.number,
  reviewCount: PropTypes.number,
  showFraction: PropTypes.bool,
  changeRating: PropTypes.func
};

ReviewStars.defaultProps = {
  maximumCount: 5,
  reviewRate: 0,
  reviewCount: 0,
  showFraction: false,
  changeRating: false
};

export default ReviewStars;
