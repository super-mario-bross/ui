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
    reviews = [],
    paginationInfo,
    basicInfo
  } = useRatingsReviewsHook({ entityId: productId });
  console.log("hhome", reviews, paginationInfo,
    basicInfo);
  return (
    <div className="container">
      <Box fill>
        <Box direction='row'>
          <Box flex align='start'>
            <ProductBasicDetails productId={productId} />
            <ReviewsRatingSection
              paginationInfo={paginationInfo}
              basicInfo={basicInfo}
              reviews={reviews}
              onChangeFilter={onChangeFilter}
              filterValues={filterValues}
              currentFilter={currentFilter}
              isPagination={false}
            />
          </Box>
        </Box>
      </Box >
    </div>
  );
};

export default HomePage;