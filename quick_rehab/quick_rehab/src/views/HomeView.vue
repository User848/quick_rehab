<!-- HomeView.vue -->

<template>
  <div class="center-container">
    <h1>Quick Rehab Nitra</h1>
    <h2>Náš personál</h2>
    <div class="doctor-list">
      <RouterLink v-for="doctor in doctors" :key="doctor.name"   style="text-decoration: none;"  :to="{ name: 'home-doctor', params: { name: doctor.name } }">
        <div class="doctor-item">
          <img :src="doctor.image" :alt="doctor.name" class="doctor-image" />
          <div class="doctor-name">{{ doctor.name }}</div>
          <div class="specialization">{{ doctor.specialization }}</div>
        </div>
      </RouterLink>
    </div>
    <RouterView class="lower"/>
  </div>
</template>



<script>
import { RouterLink, RouterView } from 'vue-router';
import dataDoctor from '@/data.json';

export default {
  data() {
    return {
      doctors: dataDoctor,
    };
  },
};
</script>

<style scoped>
.lower{

  margin-top: 2cm;
}
</style>
