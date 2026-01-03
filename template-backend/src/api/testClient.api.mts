import { ApiClient } from './apiClient.api.mjs';
import { ExtendedError } from '../errors/extended.error.mjs';
import { JsonExpectedError } from '../errors/jsonExpected.error.mjs';

export class TestClientApi extends ApiClient {
    private async request<T>(path: string, options: RequestInit): Promise<T> {
        const url = `${this.baseUrl}${path}`;
        const response = await fetch(url, {
            ...options,
            headers: {
                'X-Api-Key': this.apiKey,
                ...options.headers,
            },
        });

        if (!response.ok) {
            // throw new JellySeerrResponseError(response);
            throw new Error('temp');
        }

        if (response.status === 204 || response.headers.get('content-length') === '0') {
            return { success: true } as T;
        }

        const contentType = response.headers.get('content-type');
        if (!contentType?.includes('application/json')) {
            throw new JsonExpectedError(contentType);
        }
        return (await response.json()) as T;
    }

    public get<T>(path: string): Promise<T> {
        return this.request<T>(path, { method: 'GET' });
    }

    public post<T>(path: string, payload: any): Promise<T> {
        return this.request<T>(path, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });
    }

    public delete<T>(path: string): Promise<T> {
        return this.request(path, { method: 'DELETE' });
    }
}

export const testClient = new TestClientApi(`${process.env.JELLYSEERR_URL!}/api/v1`, process.env.JELLYSEERR_API_KEY!);
