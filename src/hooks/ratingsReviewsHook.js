/* eslint-disable */
import { useRef, useState, useEffect } from 'react';
import useSWR from 'swr';
import swrOptions from '../utils/swrConfig';
import { doFetch } from "../utils/Fetch/Fetch";
import { getRatingsReviewsUrl } from '../utils/urls';
import { filterValues, filterDisplayValues } from '../constants';

const fetchReviewsAndRatings = ({ entityId, limit, offset, sortkey, sortOrder, filterByRating }) => {
  const url = getRatingsReviewsUrl({
    entityId,
    limit,
    offset,
    sortkey,
    sortOrder,
    filterByRating
  });
  const { data: responseData } = useSWR(url, doFetch, swrOptions);

  if (responseData) {
    const {
      reviewAndRatingsInfo,
      paginationInfo,
      summaryData
    } = responseData;
    return {
      reviewAndRatingsInfo,
      paginationInfo,
      summaryData
    };
  }
  return {};
};

const getSortValues = (filter) => {
  const sortValues = filterValues.find((v) => v.name === filter);
  return sortValues;
}

const useRatingsReviewsHook = ({ entityId }) => {
  const [currentFilter, setFilter] = useState(filterDisplayValues[filterDisplayValues.length - 6]);
  const filterByRating = getSortValues(currentFilter);
  const [offset, setFilterOffset] = useState(0);
  const currentSortValue = getSortValues(currentFilter);
  const ratingsAndReviewResponseData = fetchReviewsAndRatings({
    entityId,
    offset,
    filterByRating: filterByRating.filterByRating,
    sortkey: currentSortValue.sort_key,
    sortOrder: currentSortValue.sort_order
  });

  const {
    reviewAndRatingsInfo: reviews = [],
    paginationInfo = {},
    summaryData = []
  } = ratingsAndReviewResponseData;

  const onChangeFilter = (value) => {
    setFilterOffset(0);
    setFilter(value);
  };

  return {
    filterValues: filterDisplayValues,
    currentFilter,
    onChangeFilter,
    reviews,
    paginationInfo: {
      ...paginationInfo,
      offset,
      setFilterOffset
    },
    filterByRating,
    basicInfo: summaryData[0]
  };
};

export default useRatingsReviewsHook;
