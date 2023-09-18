<script setup lang="ts">
import { Form, Field, ErrorMessage, SubmissionContext } from "vee-validate";
import { loginSchema } from "../validators/login";

const emit = defineEmits(["closeModal"]);

function handleSubmit(_: any, ctx: SubmissionContext) {
  console.log(ctx.resetForm());
  emit("closeModal");
}
</script>

<template>
  <Form class="login" @submit="handleSubmit" :validation-schema="loginSchema">
    <h1>Sign in into PizzaDelivery</h1>

    <Field name="cpf" type="text" placeholder="CPF" />
    <ErrorMessage name="cpf" class="login__error-message" />

    <Field name="date" type="date" />
    <ErrorMessage name="date" class="login__error-message" />

    <button>Sign in</button>
  </Form>
</template>

<style scoped lang="scss">
.login {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.1019607843);
  background-color: #fff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  h1 {
    font-size: 24px;
    margin-bottom: 8px;
  }

  input {
    padding: 16px;
    border: 1px solid #ebe5f9;
    border-radius: 4px;
  }

  button {
    padding: 16px;
    border: none;
    border-radius: 4px;
    background-color: #ebe5f9;
    font-weight: bold;
    font-size: 16px;
    color: #000;
    cursor: pointer;
  }

  &__error-message {
    color: #fb3434;
    margin-top: -16px;
    margin-left: 5px;
    font-size: 14px;
  }
}
</style>
