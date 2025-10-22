<template>
    <v-app-bar flat color="white" elevation="1">
        <v-container class="d-flex align-center justify-space-between">
            <div class="d-flex align-center gap-2">
                <v-icon class="me-2" :icon size="24" />
                <span>{{ appTitle }}</span>
            </div>

            <v-btn icon variant="text">
                <v-icon icon="mdi-help-circle-outline" />
            </v-btn>
        </v-container>
    </v-app-bar>
</template>

<script setup lang="ts">
defineProps<{
    appTitle: string;
    icon: string;
}>();
</script>
