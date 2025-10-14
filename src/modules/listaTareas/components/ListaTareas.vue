<template>
    <div>
        <h2>Lista de tareas</h2>
        <input type="text" v-model="nuevaTarea" @keyup.enter="agregarTarea"><button
            @click="agregarTarea">Agregar</button>
        <ul>
            <li v-for="tarea in tareas">{{ tarea }} <button
                    @click="eliminarTarea(tareas.indexOf(tarea))">Eliminar</button></li>
        </ul>
    </div>
</template>
<script setup>
import { ref } from "vue";

const tareas = ref([]);
const nuevaTarea = ref("");

const agregarTarea = () => {
    if (nuevaTarea.value) {
        tareas.value.push(nuevaTarea.value);
        nuevaTarea.value = "";
    } else {
        alert("Ingrese una tarea");
    }
};

const eliminarTarea = (index) => {
    tareas.value.splice(index, 1);
};

</script>
<style scoped></style>