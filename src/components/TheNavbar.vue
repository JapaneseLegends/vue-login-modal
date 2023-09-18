<script setup lang="ts">
import TheNavbarButton from "./TheNavbarButton.vue";
import TheLogin from "./TheLogin.vue";
import { ref } from "vue";

const modal = ref<HTMLDialogElement | null>(null);

function showModal() {
  modal.value?.showModal();
}

function closeModal() {
  modal.value?.close();
}
</script>

<template>
  <nav class="navbar">
    <img class="navbar__brand" src="src/assets/vectors/logo.svg" alt="logo" />
    <div class="navbar__links">
      <TheNavbarButton color="#ebe5f9" @click="showModal"
        >Login</TheNavbarButton
      >
      <TheNavbarButton color="#f1e9c9">Shopping</TheNavbarButton>
    </div>
  </nav>

  <dialog ref="modal" @click.self="closeModal">
    <TheLogin @close-modal="closeModal" />
  </dialog>
</template>

<style scoped lang="scss">
.navbar {
  width: 100%;
  height: 115px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 60px;

  &__brand {
    max-width: 115px;
  }

  &__links {
    display: flex;
    gap: 8px;
  }

  @media screen and (max-width: 768px) {
    padding: 30px 15px;
  }
}
</style>
