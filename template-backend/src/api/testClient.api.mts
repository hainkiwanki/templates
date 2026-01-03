import { ApiClient } from './apiClient.api.mjs';

export class TestClientApi extends ApiClient {
    public throwApiSpecificError(response: Response): never {
        // throw new JellySeerrResponseError(response);
        throw new Error(`${response.statusText}`);
    }
}

export const testClient = new TestClientApi(`${process.env.JELLYSEERR_URL!}/api/v1`, process.env.JELLYSEERR_API_KEY!, {
    'X-Api-Key': process.env.JELLYSEERR_API_KEY!,
});
