import { useErrorStore } from '../store/error.store.mts';
import type { ComponentPublicInstance } from 'vue';

export class ErrorHandler {
    private static getMessage(err: unknown): string {
        if (err instanceof Error) {
            return err.message;
        }
        if (typeof err === 'string') {
            return err;
        }
        return 'Unknown error';
    }

    public static handleViteErrors(err: unknown, _: ComponentPublicInstance | null, info: string): void {
        const store = useErrorStore();
        store.show(`Vue error: ${this.getMessage(err)} (${info})`);
    }

    public static handleUnhandleRejections(event: PromiseRejectionEvent): void {
        const store = useErrorStore();
        store.show(`Unhandled promise: ${this.getMessage(event.reason)}`);
    }

    public static handleError(event: ErrorEvent): void {
        const store = useErrorStore();
        store.show(`Error: ${this.getMessage(event.error)}`);
    }
}
