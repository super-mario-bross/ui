import React from 'react';
import PropTypes from 'prop-types';
import Review from "./../Review";
import "./index.scss";

const ReviewsList = ({ reviews }) => {

  return (
    <section className="review-list-section">
      <div className="row">
        <div className="col-12">
          {
            reviews.map((data, index) => {
              return <Review key={index} {...data}  />
            })
          }
        </div>
      </div>
    </section>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array
};

ReviewsList.defaultProps = {
  reviews: []
};

export default ReviewsList;