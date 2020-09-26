import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Button } from 'grommet';
import ReviewStars from '../../components/ReviewStars';
import SortAndFilter from '../../components/SortAndFilter';
import ReviewsList from '../../components/ReviewsList';
import SeeAllReviews from '../../components/SeeAllReviews';
import AddReviewRatingsForm from '../../components/AddReviewRatingsForm';
import AddRatingsReviewModal from '../../components/AddRatingsReviewModal';
import "./index.scss";

const ReviewsRating = ({
  reviews,
  filterValues,
  currentFilter,
  onChangeFilter
}) => {
  return (
    <section className="review-rating-section">
      <div className="row">
        <div className="col-sm-9">
          <Heading level={3} size={3}>
            Reviews & Ratings
          </Heading>
        </div>
        <div className="col-sm-3">
          <Box align="right" pad="small">
            <AddRatingsReviewModal openModalButtonLabel="Add A Review">
            <AddReviewRatingsForm />
              </AddRatingsReviewModal>
          </Box>
        </div>
        <div className="col-12">
          <ReviewStars reviewRate={2.5}
            reviewCount={100} changeRating={() => { }} />
        </div>
      </div>
      <SortAndFilter
        options={filterValues}
        value={currentFilter}
        onChangeFilter={onChangeFilter}
      />
      <ReviewsList reviews={reviews} />
      <SeeAllReviews />
    </section>
  );
};

ReviewStars.propTypes = {
  reviews: PropTypes.array,
};

ReviewStars.defaultProps = {
  reviews: [],
  filterValues: [],
  currentFilter: '',
  onChangeFilter: () => {}
};


export default ReviewsRating;