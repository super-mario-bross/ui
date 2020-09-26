import { doFetch, doPost } from '.';
import HTTPError from '../HTTPError';

global.console = { log: jest.fn(), warn: jest.fn() };
jest.mock('isomorphic-unfetch', () => jest.fn((url) => {
  switch (url) {
    case 'http://localhost/no-json':
      return Promise.resolve({
        ok: true,
        text: () => 'OK',
        headers: {
          get: () => ['text/html'],
        },
      });
    case 'http://localhost/no-ok-error':
      return Promise.resolve({
        ok: false,
        json: () => ({
          error: 'no OK',
        }),
        headers: {
          get: () => ['application/json', 'status'],
        },
      });
    case 'http://localhost/unexpected-error':
      throw new Error('Unexpected error');
    default:
      return Promise.resolve({
        ok: true,
        json: () => ({
          id: 'test',
        }),
        headers: {
          get: () => ['application/json'],
        },
      });
  }
}));

const fetch = require('isomorphic-unfetch');

describe('Fetch component', () => {
  describe('doFetch method', () => {
    let baseUrl;
    let result;
    let expectedResult;

    beforeAll(() => {
      baseUrl = 'http://localhost';
    });

    describe('when success', () => {
      describe('when no json', () => {
        let url;

        beforeAll(() => {
          url = `${baseUrl}/no-json`;
          expectedResult = 'OK';
        });

        beforeEach(async () => {
          result = await doFetch(url);
        });

        test('should call fetch', () => {
          expect(fetch).toHaveBeenCalled();
        });

        test('should call fetch with expected params', () => {
          expect(fetch).toHaveBeenCalledWith(url, {});
        });

        test('should return expected response', () => {
          expect(result).toEqual(expectedResult);
        });
      });

      describe('when json', () => {
        beforeAll(() => {
          expectedResult = {
            id: 'test',
          };
        });

        describe('when no params given', () => {
          beforeEach(async () => {
            result = await doFetch();
          });

          test('should call fetch', () => {
            expect(fetch).toHaveBeenCalled();
          });

          test('should return expected response', () => {
            expect(result).toEqual(expectedResult);
          });
        });

        describe('when url given', () => {
          let url;

          beforeAll(() => {
            url = `${baseUrl}/dummyPath`;
          });

          beforeEach(async () => {
            result = await doFetch(url);
          });

          test('should call fetch', () => {
            expect(fetch).toHaveBeenCalled();
          });

          test('should call fetch with expected params', () => {
            expect(fetch).toHaveBeenCalledWith(url, {});
          });

          test('should return expected result', () => {
            expect(result).toEqual(expectedResult);
          });
        });
      });
    });
    describe('when error', () => {
      let url;

      describe('when response is not ok', () => {
        beforeAll(() => {
          url = `${baseUrl}/no-ok-error`;
          expectedResult = new HTTPError('', JSON.stringify({
            error: 'no OK',
          }));
        });

        beforeEach(async () => {
          try {
            result = await doFetch(url);
          } catch (error) {
            result = error;
          }
        });

        test('should call fetch', () => {
          expect(fetch).toHaveBeenCalled();
        });

        test('should call fetch with expected params', () => {
          expect(fetch).toHaveBeenCalledWith(url, {});
        });

        test('should call console.log', () => {
          expect(console.log).toHaveBeenCalled();
        });

        test('should throw error', () => {
          expect(result).toEqual(expectedResult);
        });
      });

      describe('when unexpected error', () => {
        beforeAll(() => {
          url = `${baseUrl}/unexpected-error`;
        });

        beforeEach(async () => {
          try {
            result = await doFetch(url);
          } catch (error) {
            result = error;
          }
        });

        test('should call fetch', () => {
          expect(fetch).toHaveBeenCalled();
        });

        test('should call fetch with expected params', () => {
          expect(fetch).toHaveBeenCalledWith(url, {});
        });

        test('should call console.log', () => {
          expect(console.log).toHaveBeenCalled();
        });

        test('should throw error', () => {
          expect(result).toEqual(new Error('Unexpected error'));
        });
      });
    });
  });

  describe('doPost method', () => {
    let baseUrl;
    let result;
    let expectedResult;
    const mockBody = {
      field: 'value',
    };
    const mockOptions = {
      headers: {
        field: 'value',
      },
    };

    beforeAll(() => {
      baseUrl = 'http://localhost';
    });

    describe('when success', () => {
      describe('when no json', () => {
        let url;

        beforeAll(() => {
          url = `${baseUrl}/no-json`;
          expectedResult = 'OK';
        });

        beforeEach(async () => {
          result = await doPost(url, mockBody, mockOptions);
        });

        test('should call fetch', () => {
          expect(fetch).toHaveBeenCalled();
        });

        test('should call fetch with expected params', () => {
          expect(fetch).toHaveBeenCalledWith(url, {
            method: 'post',
            body: JSON.stringify(mockBody),
            ...mockOptions,
          });
        });

        test('should return expected response', () => {
          expect(result).toEqual(expectedResult);
        });
      });

      describe('when json', () => {
        beforeAll(() => {
          expectedResult = {
            id: 'test',
          };
        });

        beforeEach(async () => {
          result = await doPost(baseUrl, mockBody, mockOptions);
        });

        test('should call fetch', () => {
          expect(fetch).toHaveBeenCalled();
        });

        test('should return expected response', () => {
          expect(result).toEqual(expectedResult);
        });
      });
    });

    describe('when error', () => {
      let url;

      describe('when response is not ok', () => {
        beforeAll(() => {
          url = `${baseUrl}/no-ok-error`;
          expectedResult = new HTTPError('', JSON.stringify({
            error: 'no OK',
          }));
        });

        beforeEach(async () => {
          try {
            result = await doPost(url, mockBody, mockOptions);
          } catch (error) {
            result = error;
          }
        });

        test('should call fetch', () => {
          expect(fetch).toHaveBeenCalled();
        });

        test('should call fetch with expected params', () => {
          expect(fetch).toHaveBeenCalledWith(url, {
            method: 'post',
            body: JSON.stringify(mockBody),
            ...mockOptions,
          });
        });

        test('should call console.log', () => {
          expect(console.log).toHaveBeenCalled();
        });

        test('should throw error', () => {
          expect(result).toEqual(expectedResult);
        });
      });

      describe('when unexpected error', () => {
        beforeAll(() => {
          url = `${baseUrl}/unexpected-error`;
        });

        beforeEach(async () => {
          try {
            result = await doPost(url, mockBody, mockOptions);
          } catch (error) {
            result = error;
          }
        });

        test('should call fetch', () => {
          expect(fetch).toHaveBeenCalled();
        });

        test('should call fetch with expected params', () => {
          expect(fetch).toHaveBeenCalledWith(url, {
            method: 'post',
            body: JSON.stringify(mockBody),
            ...mockOptions,
          });
        });

        test('should call console.log', () => {
          expect(console.log).toHaveBeenCalled();
        });

        test('should throw error', () => {
          expect(result).toEqual(new Error('Unexpected error'));
        });
      });
    });
  });
});
