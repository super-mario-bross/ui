import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { Box, Heading } from 'grommet';
import ReviewStars from '../../components/ReviewStars';
import SortAndFilter from '../../components/SortAndFilter';
import ReviewsList from '../../components/ReviewsList';
import SeeAllReviews from '../../components/SeeAllReviews';
import AddReviewRatingsForm from '../../components/AddReviewRatingsForm';
import AddRatingsReviewModal from '../../components/AddRatingsReviewModal';
import "./index.scss";

const ReviewsRating = ({
  paginationInfo = {},
  basicInfo = {},
  reviews,
  filterValues,
  currentFilter,
  onChangeFilter,
  isPagination
}) => {
  const {
    avgRating = 0,
    negativeSentiments = 0,
    neutralSentiments = 0,
    positiveSentiments = 0,
    totalReviews = 0,
    createdAt,
    updatedAt,
    uuid
  } = basicInfo;
  const {
    total: totalRecords,
    offset,
    setFilterOffset
  } = paginationInfo;
  const limit = 10;
  const pageCount = Math.ceil(totalRecords / limit);

  const handlePageClick = (data) => {
    let selected = data.selected;
    let newOffset = Math.ceil(selected * limit);
    setFilterOffset(newOffset);
  };

  return (
    <section className="review-rating-section">
      <div className="row">
        <div className="col-sm-9">
          <Heading level={3}>
            Reviews & Ratings
          </Heading>
        </div>
        <div className="col-sm-3">
          <Box align="end" pad="small">
            <AddRatingsReviewModal openModalButtonLabel="Add A Review">
              <AddReviewRatingsForm />
            </AddRatingsReviewModal>
          </Box>
        </div>
        <div className="col-12">
          <ReviewStars
            showFraction={true}
            maximumCount={5}
            reviewRate={avgRating}
            reviewCount={totalReviews}
          />
          <p className="pt-2 mb-0">No. of Positive Sentiments: {positiveSentiments}</p>
          <p className="mb-0">No. of Netural Sentiments: {neutralSentiments}</p>
          <p className="mb-0">No. of Negative Sentiments: {negativeSentiments}</p>
        </div>
      </div>
      <SortAndFilter
        options={filterValues}
        value={currentFilter}
        onChangeFilter={onChangeFilter}
      />
      <ReviewsList reviews={reviews} />
      {isPagination &&
        <div className="pagination-wrapper">
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>}
      {!isPagination && <SeeAllReviews />}
    </section>
  );
};

ReviewStars.propTypes = {
  reviews: PropTypes.array,
  basicInfo: PropTypes.object,
  paginationInfo: PropTypes.object,
  isPagination: PropTypes.bool
};

ReviewStars.defaultProps = {
  reviews: [],
  filterValues: [],
  currentFilter: '',
  basicInfo: {},
  paginationInfo: {},
  onChangeFilter: () => { },
  isPagination: false
};


export default ReviewsRating;