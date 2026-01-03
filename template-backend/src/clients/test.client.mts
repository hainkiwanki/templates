import { ApiClient } from './api.client.mjs';

export class TestClient extends ApiClient {
    public throwApiSpecificError(response: Response): never {
        // throw new JellySeerrResponseError(response);
        throw new Error(`${response.statusText}`);
    }
}

export const testClient = new TestClient(`${process.env.JELLYSEERR_URL!}/api/v1`, process.env.JELLYSEERR_API_KEY!, {
    'X-Api-Key': process.env.JELLYSEERR_API_KEY!,
});
