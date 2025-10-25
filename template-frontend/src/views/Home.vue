<template>
    <v-app>
        <v-layout>
            <app-bar :app-title="'Project'" :icon="'mdi-scissors-cutting'" @toggle-drawer="drawer = !drawer"></app-bar>
            <v-navigation-drawer v-model="drawer" expand-on-hover :rail mobile-breakpoint="md">
                <v-list>
                    <v-list-item :prepend-icon="rail ? 'mdi-toggle-switch-off-outline' : 'mdi-toggle-switch'" @click="onToggleClick" :title="'Toggle Hover'"></v-list-item>
                    <v-divider></v-divider>
                    <v-list-item :prepend-icon="'mdi-sprout'" :color="'#2196f3'" :title="1"></v-list-item>
                    <v-list-item :prepend-icon="'mdi-lightbulb-variant'" :color="'orange'" :title="2"></v-list-item>
                    <v-list-item :prepend-icon="'mdi-update'" :color="'green'" :title="3"></v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-main class="main d-flex flex-column justify-start">
                <v-container>
                    <h1 class="text-h4 mb-4">Welcome to Your Tool</h1>
                    <p>Add your custom content here</p>
                </v-container>
            </v-main>
        </v-layout>
    </v-app>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import AppBar from './AppBar.vue';

const drawer = ref(true);
const rail = ref(true);

onMounted(() => {
    const railed = localStorage.getItem('rail');
    if (railed === 'true') {
        rail.value = true;
    } else {
        rail.value = false;
    }
});

function onToggleClick(): void {
    rail.value = !rail.value;
    localStorage.setItem('rail', rail.value.toString());
}
</script>
