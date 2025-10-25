<template>
    <v-app-bar flat elevation="1">
        <template v-slot:prepend>
            <v-app-bar-nav-icon v-if="$vuetify.display.smAndDown" @click="emit('toggle-drawer')"></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title>{{ appTitle }}</v-app-bar-title>
        <template v-slot:append>
            <v-btn @click="toggleTheme" icon="mdi-lightbulb" :color="isDarkTheme() ? 'warning' : 'accent'"> </v-btn>
        </template>
    </v-app-bar>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();

defineProps<{
    appTitle: string;
    icon: string;
}>();

const emit = defineEmits<{
    (e: 'toggle-drawer'): void;
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
    theme.global.name.value = newTheme;
    localStorage.setItem('theme', newTheme);
}
</script>
