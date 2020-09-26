import React from 'react';
import { Link, useParams } from 'react-router-dom';
import "./index.scss";

const SeeAllReviews = () => {
  const { productId = '/' } = useParams();
  const path =`/${productId}/allreviews`;
  return (
    <div className="see-all-reviews-link text-center pt-2">
        <Link to={path} className="see-all-link w-100 d-block">See All Reviews</Link>
    </div>
  );
};

export default SeeAllReviews;