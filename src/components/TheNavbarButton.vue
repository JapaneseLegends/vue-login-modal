<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{
  color: string;
}>();
</script>

<template>
  <button
    class="nav-button"
    :style="{
      backgroundColor: color,
    }"
  >
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.nav-button {
  padding: 8px;
  border: none;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
}
</style>
