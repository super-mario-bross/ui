import React from 'react';
import { Box } from 'grommet';
import { useParams } from "react-router-dom";
import ReviewsRatingSection from '../ReviewsRating';
import useRatingsReviewsHook from '../../hooks/ratingsReviewsHook';

const AllReviewsPage = () => {
  const { productId } = useParams();
  const {
    filterValues,
    currentFilter,
    onChangeFilter,
    reviews = []
  } = useRatingsReviewsHook({ entityId: productId });

  return (
    <div className="container">
    <Box fill>
      <Box direction='row'>
        <Box flex align='left' justify='left'>
          {productId}
          <ReviewsRatingSection reviews={reviews} onChangeFilter={onChangeFilter} filterValues={filterValues} currentFilter={currentFilter} />
        </Box>
      </Box>
    </Box >
    </div>
  );
};

export default AllReviewsPage;