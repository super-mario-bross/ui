import { filterOptions } from "../constants";

const baseApiUrl = process.env.BASE_API_URL || 'http://localhost:4444/v1/'

export const getRatingsReviewsUrl = ({
  entityId = '',
  limit = 10,
  offset = 1,
  sortkey = 'rating',
  sortOrder = 'DESC',
  filterByRating = filterOptions[3].value
}) => {
  return `${baseApiUrl}reviewAndRatings?entity_id=${entityId}&limit=${limit}&offset=${offset}&sort_key=${sortkey}&sort_order=${sortOrder}&filterByRating=${filterByRating}`;
};


export const getPostRatingsReviewsUrl = (
  baseUrl,
) => {
  return `${baseApiUrl}`;
};