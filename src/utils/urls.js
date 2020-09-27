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
  let url = `${baseApiUrl}reviewAndRatings?entityId=${entityId}&limit=${limit}&offset=${offset}&sortKey=${sortkey}&sortOrder=${sortOrder}`;
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

export const getUpdateReviewByUsersReactionUrl = () => {
  return `${baseApiUrl}reviewAndRatings/updateReviewByUsersReaction`;
};