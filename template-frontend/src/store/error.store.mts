import { defineStore } from 'pinia';

export const useErrorStore = defineStore('error', {
    state: () => ({
        message: '' as string,
        visible: false as boolean,
    }),
    actions: {
        show(message: string): void {
            this.message = message;
            this.visible = true;
        },
    },
});
