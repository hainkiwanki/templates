<template>
    <v-app-bar flat elevation="1">
        <template #prepend>
            <v-app-bar-nav-icon v-if="$vuetify.display.smAndDown" @click="onToggleDrawerClick"></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title>{{ appTitle }}</v-app-bar-title>
        <template #append>
            <v-btn icon="mdi-lightbulb" :color="isDarkTheme() ? 'warning' : 'accent'" @click="toggleTheme" />
        </template>
    </v-app-bar>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useTheme } from 'vuetify';
import { useClientSettingsStore } from '../store/settingsClient.store.mts';

const theme = useTheme();
const clientSettings = useClientSettingsStore();

defineProps<{
    appTitle: string;
    icon: string;
}>();

const emit = defineEmits<{
    (e: 'onDrawerToggleClicked'): void;
}>();

onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        theme.global.name.value = savedTheme;
    }
});

function isDarkTheme(): boolean {
    return theme.global.current.value.dark;
}

function toggleTheme(): void {
    const newTheme = theme.global.current.value.dark ? 'light' : 'dark';
    clientSettings.save(newTheme);
    theme.change(newTheme);
}

function onToggleDrawerClick(): void {
    emit('onDrawerToggleClicked');
}
</script>
