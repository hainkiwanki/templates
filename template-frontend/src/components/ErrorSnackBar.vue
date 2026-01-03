<template>
    <v-snackbar v-model="error.visible" color="error" timeout="4000" location="bottom">
        {{ error.message }}
    </v-snackbar>
</template>

<script setup lang="ts">
import { useErrorStore } from '../store/error.store.mts';

const error = useErrorStore();
</script>
