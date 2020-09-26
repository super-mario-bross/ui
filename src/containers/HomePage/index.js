import React from 'react';
import { Box } from 'grommet';
import { useParams } from "react-router-dom";
import ReviewsRatingSection from '../ReviewsRating';
import ProductBasicDetails from '../../components/ProductBasicDetails';

import useRatingsReviewsHook from '../../hooks/ratingsReviewsHook';

const HomePage = () => {
  const { productId = '' } = useParams();
  const {
    filterValues,
    currentFilter,
    onChangeFilter,
    reviews = []
  } = useRatingsReviewsHook({ entityId: productId });
  console.log(reviews);
  return (
    <div className="container">
    <Box fill>
      <Box direction='row'>
        <Box flex align='left' justify='left'>
          <ProductBasicDetails productId={productId} />
          <ReviewsRatingSection reviews={reviews} onChangeFilter={onChangeFilter} filterValues={filterValues} currentFilter={currentFilter} />
        </Box>
      </Box>
    </Box >
    </div>
  );
};

export default HomePage;