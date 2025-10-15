<template>
  <AppHeader :msg="texto"></AppHeader>
  <div class="container">
    <Sidebar></Sidebar>
    <div class="content">
      <router-view></router-view>
      <input type="text" v-model="texto" placeholder="Escribe algo..." />
      {{ texto }}
    </div>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import Sidebar from '../components/AppSidebar.vue';
import { ref } from 'vue';

const texto = ref('');
</script>


<style scoped>
.container {
  /* width: 100vw;
    height: 100vh; */
  display: flex;
  margin-top: 20px;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
