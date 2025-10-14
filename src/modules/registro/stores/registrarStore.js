import { defineStore } from "pinia";
import { ref } from "vue";

export const useRegistrarStore = defineStore('registrar', () => {
  const nombre = ref('');
  const email = ref('');


  const guardarRegistro = (nombreForm, emailForm) => {
    console.log('Formulario enviado');
    console.log('Nombre:', nombre.value);
    console.log('Email:', email.value);
    nombre.value = nombreForm;
    email.value = emailForm;
  };
  return { nombre, email, guardarRegistro };
})
