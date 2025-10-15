<template>
  <div class="header">
    {{ msgRecibido }}<AppWeather></AppWeather>
  </div>
</template>
<script setup>
import AppWeather from './AppWeather.vue';
import { defineProps, ref, watch } from 'vue';

const props = defineProps({
  msg: String
})
const msgRecibido = ref(props.msg);
watch(() => props.msg, (newValue) => {
  msgRecibido.value = newValue
})
</script>


<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  /* position: fixed; */
  top: 0;
  left: 0;
  right: 0;
  background-color: #333;
  color: white;
}

h3 {
  margin: 0;
}
</style>
