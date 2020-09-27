import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Button, Select, Text } from 'grommet';
import "./index.scss";

const SortAndFilter = ({
  options, value, onChangeFilter
}) => {
  return (
    <section className="sort-and-filter-section">
      <div className="row">
        <div className="col-6">

        </div>
        <div className="col-6 text-right">
          <span className="sort-by-label">Sort By & Filter:</span>
            <Select
              id="select"
              name="select"
              placeholder="Select"
              value={value}
              options={options}
              onChange={({ option }) => onChangeFilter(option)}
            />
        </div>
      </div>
    </section>
  );
};


SortAndFilter.propTypes = {
  options: PropTypes.array,
  value: PropTypes.string,
  onChangeFilter: PropTypes.func
};

SortAndFilter.defaultProps = {
  options: [],
  value: 'Select',
  onChangeFilter: () => {}
};

export default SortAndFilter;