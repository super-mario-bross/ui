import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  TextArea,
  Form,
  FormField,
  Text,
  TextInput
} from 'grommet';
import "./index.scss";
import { getPostRatingsReviewsUrl } from '../../utils/urls';
import { doPost } from '../../utils/Fetch/Fetch';

const AddReviewRatingsForm = ({
  entity
  // options, value, onChangeFilter
}) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [reviewDesc, setReviewDesc] = useState('');
  const [rating, setRating] = useState(0);

  const postReviewRating = async ({ entity,
    author,
    title,
    reviewDesc,
    rating }) => {
    const baseUrl = '';
    const url = getPostRatingsReviewsUrl(baseUrl);
    const body = {
      entity,
      author,
      title,
      reviewDesc,
      rating
    };
    const options = {};
    await doPost(url, body, options);
  };

  const validateFields = (fields) => {
    const {
      entity,
      author,
      title,
      reviewDesc,
      rating
    } = fields;
    if (!entity || !rating || !author) {
      return false;
    }
    return true;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      entity: entity.trim(),
      author: author.trim(),
      title: title.trim(),
      reviewDesc: reviewDesc.trim(),
      rating
    };
    const isFieldsValid = validateFields(data);
    if (isFieldsValid) {
      postReviewRating(data);
    }
  };
  return (
    <section className="add-review-rating-form-section">
      <div className="row">
        <div className="col-12 text-left">
          <h4>Your review matters to us</h4>
          <h5>Please rate this product</h5>
        </div>
        <div className="col-12">
          <Box fill align="left" justify="center">
            <Box width="medium">
              <Form
                onSubmit={onSubmit}
              >
                <FormField label="Name" name="author" required>
                  <TextInput name="author" value={author} onChange={event => setAuthor(event.target.value)} />
                </FormField>

                <FormField label="Title" name="title">
                  <TextInput name="title" value={title} onChange={event => setTitle(event.target.value)} />
                </FormField>

                <FormField label="Rate this product" name="rating">
                  <TextInput name="rating" value={rating} onChange={event => setRating(event.target.value)} />
                </FormField>

                <FormField label="Description" name="reviewDesc">
                  <TextArea
                    name="reviewDesc"
                    value={reviewDesc}
                    onChange={event => setReviewDesc(event.target.value)}
                  />
                </FormField>

                <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                  <Button type="submit" label="Post feedback" primary />
                </Box>
              </Form>
            </Box>
          </Box>
        </div>
      </div>
    </section>
  );
};


AddReviewRatingsForm.propTypes = {
  entity: PropTypes.string.isRequired
};

AddReviewRatingsForm.defaultProps = {
  entity: '111'
};

export default AddReviewRatingsForm;