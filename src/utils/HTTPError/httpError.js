class HTTPError extends Error {
  constructor(statusCode, message = '') {
    super(message);
    this.statusCode = statusCode;
  }

  getStatusCode() {
    return this.statusCode;
  }

  getMessage() {
    return this.message;
  }

  toString() {
    return `Error ${this.statusCode}: ${this.message}`;
  }
}

export default HTTPError;
