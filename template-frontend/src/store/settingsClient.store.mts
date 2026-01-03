import { defineStore } from 'pinia';

const STORE_NAME = 'client-settings';
const LS_NAME = 'theme';
const DEFAULT_THEME = 'dark';

export const useClientSettingsStore = defineStore(STORE_NAME, () => {
    function load(): string {
        return localStorage.getItem(LS_NAME) ?? DEFAULT_THEME;
    }

    function save(t: string): void {
        localStorage.setItem(LS_NAME, t);
    }

    return { load, save };
});
