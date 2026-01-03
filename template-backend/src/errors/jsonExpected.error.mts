import { ExtendedError } from './extended.error.mjs';

export class JsonExpectedError extends ExtendedError {
    constructor(contentType: string | null) {
        const message = `Expected JSON but got ${contentType}`;
        super(message);
        this.name = 'JsonExpectedError';
    }
}
