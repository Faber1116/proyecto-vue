<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label for="nombre">Nombre:</label>
        <field v-model="nombre" type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre"></Field>
        <ErrorMessage name="nombre" />
      </div>
      <div class="form">
        <label for="email">Correo:</label>
        <field v-model="email" type="email" name="email" id="correo" placeholder="Ingrese su email"></Field>
        <ErrorMessage name="email" />
      </div>
      <div class="form">
        <button type="submit">Registrar</button>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { schema } from '@/modules/registro/schemas/validationSchema.js';
import { useRegistrarStore } from '@/modules/registro/stores/registrarStore.js';
import { ref } from 'vue';

const registrarStore = useRegistrarStore();
const nombre = ref('');
const email = ref('');

const onSubmit = () => {
  registrarStore.guardarRegistro(nombre.value, email.value);
  console.log('Formulario enviado con éxito:', nombre.value, email.value);
  // Aquí puedes manejar el envío del formulario, como enviar los datos a una API
};
</script>

<style scoped>
.form {
  margin-bottom: 10px;
}
</style>
