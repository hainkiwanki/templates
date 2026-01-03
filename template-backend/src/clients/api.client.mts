import { JsonExpectedError } from '../errors/jsonExpected.error.mjs';
import 'dotenv/config';

export abstract class ApiClient {
    constructor(
        protected baseUrl: string,
        protected apiKey: string,
        protected customHeaders?: Record<string, string>
    ) {}

    protected async request<T>(path: string, options: RequestInit): Promise<T> {
        const url = `${this.baseUrl}${path}`;
        const response = await fetch(url, {
            ...options,
            headers: {
                ...this.customHeaders,
                ...options.headers,
            },
        });

        if (!response.ok) {
            this.throwApiSpecificError(response);
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

    public abstract throwApiSpecificError(response: Response): never;

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
