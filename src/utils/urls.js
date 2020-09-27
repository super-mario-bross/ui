import { filterOptions } from "../constants";

const baseApiUrl = process.env.BASE_API_URL || 'http://localhost:4444/v1/'

export const getRatingsReviewsUrl = ({
  entityId = '',
  limit = 10,
  offset = 1,
  sortkey = 'rating',
  sortOrder = 'DESC',
  filterByRating
}) => {
  let url = `${baseApiUrl}reviewAndRatings?entity_id=${entityId}&limit=${limit}&offset=${offset}&sort_key=${sortkey}&sort_order=${sortOrder}`;
  if (filterByRating) {
    url = `${url}&filterByRating=${filterByRating}`
  }
  return url;
};


export const getPostRatingsReviewsUrl = (
  baseUrl,
) => {
  return `${baseApiUrl}reviewAndRatings`;
};