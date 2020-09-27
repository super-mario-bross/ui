import React, { useState } from "react";
import PropTypes from 'prop-types';
import ReviewStars from "../ReviewStars";
import {
  Button
} from 'grommet';
import { getUpdateReviewByUsersReactionUrl } from "../../utils/urls";
import { doPatch } from '../../utils/Fetch/Fetch';
import "./index.scss";

const Review = ({ title, reviewDesc, author, rating, isHelpful, isNotHelpful, reviewId }) => {
  const updateUserReaction = (userReaction) => {
    if (userReaction === 'is_not_helpful') {
      postReviewRating({
        reviewId,
        userReaction: 'is_not_helpful'
      });
    } else if (userReaction === 'is_helpful') {
      postReviewRating({
        reviewId,
        userReaction: 'is_helpful'
      });
    }
  };

  const postReviewRating = async ({
    reviewId,
    userReaction
  }) => {
    const url = getUpdateReviewByUsersReactionUrl();
    const body = {
      reviewId,
      userReaction
    };
    const options = {};
    const response = await doPatch(url, body, options);
    window.location.reload();
  };

  return (
    <div className="review-wrapper p-2 pb-3">
      <div className="row">
        <div className="col-12">
          <h5 className="title">{title}</h5>
          <p className="description">{reviewDesc}</p>
          <h6 className="author">Author ID: {author}</h6>
          <div className="rating">
            <ReviewStars
            maximumCount={5}
            reviewRate={rating}
            />
          </div>
          <div className="pt-2">
            <small>
              Was this comment helpful to you?
              <span className="helpful-button">
                <Button
                  pad="xsmall"
                  onClick={() => { updateUserReaction('is_helpful') }}
                >Yes: {isHelpful}</Button>
              </span>
              <span className="helpful-button">
                <Button
                  pad="xsmall"
                  onClick={() => { updateUserReaction('is_not_helpful') }}
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
