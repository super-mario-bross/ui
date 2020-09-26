/* eslint-disable */
import { useRef, useState, useEffect } from 'react';
import useSWR from 'swr';
import swrOptions from '../utils/swrConfig';
import { doFetch } from "../utils/Fetch/Fetch";
import { getRatingsReviewsUrl } from '../utils/urls';
import { filterValues, filterDisplayValues } from '../constants';

const fetchReviewsAndRatings = ({ entityId, limit, offset, sortkey, sortOrder, filterByRating } ) => {
  let reviews = [];
  const url = getRatingsReviewsUrl({
    entityId,
    limit,
    offset,
    sortkey,
    sortOrder,
    filterByRating
  });
  const { data: responseData } = useSWR(url, doFetch, swrOptions);
  console.log(responseData);
  if (responseData) {
    const {
      reviewAndRatingsInfo,
      paginationInfo,
      summaryData
    } = responseData;
    reviews = reviewAndRatingsInfo;
  }

  return reviews;
};

const getSortValues = (filter) => {
  const sortValues = filterValues.find((v) => v.name === filter);
  return sortValues;
}

const useRatingsReviewsHook = ({ entityId }) => {
  // const { entityId } = useParams();
  const [currentFilter, setFilter] = useState(filterDisplayValues[filterDisplayValues.length-1]);
  // const [reviews, setReviews] = useState([]);
  const currentSortValue = getSortValues(currentFilter);
  const reviews = fetchReviewsAndRatings({ entityId, sortkey: currentSortValue.sort_key, sortOrder: currentSortValue.sort_order});

  const onChangeFilter = (value) => {
    setFilter(value);
  };

  // useEffect(() => {
  //   const newreviews = fetchReviewsAndRatings(entityId);
  //   setReviews(newreviews);
  // }, [currentFilter]);

  return {
    filterValues: filterDisplayValues,
    currentFilter,
    onChangeFilter,
    reviews
  };
};

export default useRatingsReviewsHook;
