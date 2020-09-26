import React from "react";
import PropTypes from 'prop-types';
import ReviewStars from "../ReviewStars";
import {
  Button
} from 'grommet';
import "./index.scss";

const Review = ({ title, reviewDesc, author, rating, isHelpful, isNotHelpful, reviewId }) => {
  return (
    <div className="review-wrapper p-2">
      <div className="row">
        <div className="col-12">
          <h5 className="title">{title}</h5>
          <p className="description">{reviewDesc}</p>
          <h6 className="author">Author ID: {author}</h6>
          <div className="rating">
            <ReviewStars reviewRate={rating} changeRating={() => { }} />
          </div>
          <div>
            <small>
              Was this comment helpful to you?
              <span className="helpful-button">
                <Button
                  pad="xsmall"
                  onClick={() => { }}
                >Yes: {isHelpful}</Button>
              </span>
              <span className="helpful-button">
                <Button
                  pad="xsmall"
                  onClick={() => { }}
                >No: {isNotHelpful}</Button>
              </span>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  rating: PropTypes.number,
  title: PropTypes.string,
  reviewDesc: PropTypes.string,
  author: PropTypes.number,
  isHelpful: PropTypes.number,
  isNotHelpful: PropTypes.number
};

Review.defaultProps = {
  rating: 0,
  title: '',
  reviewDesc: '',
  author: 0,
  isHelpful: 0,
  isNotHelpful: 0,
  reviewId: ''
};


export default Review;
