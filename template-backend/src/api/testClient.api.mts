import { ApiClient } from './apiClient.api.mjs';
import { ExtendedError } from '../errors/extended.error.mjs';
import { JsonExpectedError } from '../errors/jsonExpected.error.mjs';

export class TestClientApi extends ApiClient {
    public async get<T>(path: string): Promise<T> {
        const response = await fetch(`${this.baseUrl}${path}`, {
            headers: { 'X-Api-Key': this.apiKey },
        });
        if (!response.ok) {
            throw new ExtendedError(`${response}`);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new JsonExpectedError(contentType);
        }

        return (await response.json()) as T;
    }

    public post<T>(path: string): Promise<T> {
        throw new Error('Method not implemented.');
    }

    public delete<T>(path: string): Promise<T> {
        throw new Error('Method not implemented.');
    }
}

export const testClient = new TestClientApi(`${process.env.JELLYSEERR_URL!}/api/v1`, process.env.JELLYSEERR_API_KEY!);
