// config/error.js
export class BaseError extends Error {
    constructor(data = { message: 'Unknown Error' }) {
        super(data.message);
        this.data = data;
    }
}
