import HTTPError from '../HTTPError';

const fetch = require('isomorphic-unfetch');

const doFetch = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);

    const data = await (response.headers
      .get(['content-type'])
      .includes('application/json')
      ? response.json()
      : response.text());

    if (response.ok) {
      return data;
    }

    throw new HTTPError(response.headers.get(['status']), JSON.stringify(data));
  } catch (error) {
    console.log(`Error fetching: ${JSON.stringify(url)}`);
    throw error;
  }
};

const doPost = async (url, body, options) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });

    const data = await (response.headers
      .get(['content-type'])
      .includes('application/json')
      ? response.json()
      : response.text());

    if (response.ok) {
      return data;
    }

    throw new HTTPError(response.headers.get(['status']), JSON.stringify(data));
  } catch (error) {
    console.log(`Error doing post to ${JSON.stringify(url)}`);
    throw error;
  }
};

export { doFetch, doPost };
