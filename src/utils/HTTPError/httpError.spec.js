import HTTPError from '.';

describe('HTTPError class', () => {
  let httpError;
  let statusCode;
  let message;
  let result;
  let expectedResult;

  beforeAll(() => {
    statusCode = '404';
    message = 'Message not found';
  });

  describe('getStatusCode method', () => {
    beforeAll(() => {
      httpError = new HTTPError(statusCode, message);
      result = httpError.getStatusCode();
    });

    test('should return the status code', () => {
      expectedResult = statusCode;
      expect(result).toEqual(expectedResult);
    });
  });

  describe('getMessage method', () => {
    beforeAll(() => {
      httpError = new HTTPError(statusCode, message);
      result = httpError.getMessage();
    });

    test('should return the message', () => {
      expectedResult = message;
      expect(result).toEqual(expectedResult);
    });
  });

  describe('toString method', () => {
    beforeAll(() => {
      httpError = new HTTPError(statusCode, message);
      result = httpError.toString();
    });

    test('should return the status code', () => {
      expectedResult = `Error ${statusCode}: ${message}`;
      expect(result).toEqual(expectedResult);
    });
  });
});
