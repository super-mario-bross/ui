import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
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
import ReviewStars from '../../components/ReviewStars';
import { getPostRatingsReviewsUrl } from '../../utils/urls';
import { doPost } from '../../utils/Fetch/Fetch';

const AddReviewRatingsForm = ({
  entity
  // options, value, onChangeFilter
}) => {
  const [author, setAuthor] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [reviewDesc, setReviewDesc] = useState('');
  const [rating, setRating] = useState(0);
  const { productId } = useParams();

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
      entity: productId,
      // entity: entity.trim(),
      // author: author.trim(),
      author: 1,
      title: title.trim(),
      reviewDesc: reviewDesc.trim(),
      rating,
      // email: email.trim()
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
          <h4>Your review matters to us !!</h4>
          <h5>Please rate this product</h5>
        </div>
        <div className="col-12">
          <Box fill align="start" justify="center">
            <Box width="large">
              <Form
                onSubmit={onSubmit}
              >
                <FormField label="Title" name="title">
                  <TextInput name="title" value={title} onChange={event => setTitle(event.target.value)} />
                </FormField>

                <div className="pl-2">
                  <span className="pr-3"><Text>Rate this product</Text></span>
                  <span>
                    <ReviewStars
                      showFraction={true}
                      maximumCount={5}
                      reviewRate={rating}
                      changeRating={value => setRating(value)}
                    />
                  </span>
                </div>
                {!rating && (
                  <Box pad={{ left: 'small' }}>
                    <Text size="xsmall" color="status-error">Required</Text>
                  </Box>
                )}
                <FormField label="Description" name="reviewDesc">
                  <TextArea
                    name="reviewDesc"
                    value={reviewDesc}
                    onChange={event => setReviewDesc(event.target.value)}
                  />
                </FormField>

                <FormField label="Name" name="author" required>
                  <TextInput name="author" value={author} onChange={event => setAuthor(event.target.value)} />
                </FormField>

                {/* <FormField label="Email" name="email" required>
                  <TextInput name="email" type="email" value={email} onChange={event => setEmail(event.target.value)} />
                </FormField> */}

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