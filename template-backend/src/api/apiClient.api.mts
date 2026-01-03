export abstract class ApiClient {
    constructor(
        protected baseUrl: string,
        protected apiKey: string
    ) {}

    public abstract get<T>(path: string): Promise<T>;
    public abstract post<T>(path: string): Promise<T>;
    public abstract delete<T>(path: string): Promise<T>;
}
