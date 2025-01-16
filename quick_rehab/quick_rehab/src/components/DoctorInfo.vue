<template>
  <div class="doctor-info-container">
    <h2>{{ doctorInfo.name }}</h2>
    <img :src="doctorInfo.image" :alt="doctorInfo.name" class="doctor-image" />
    <p>{{ doctorInfo.description }}</p>
    <button class="spatbutton" @click="$router.push('/')">&#8592</button>
  </div>
</template>

<script>
import dataDoctor from '@/data.json';

export default {
  data() {
    return {
      doctorInfo: {},
    };
  },
  props: {
    name: String,
  },
  watch: {
    name(newName) {
      this.doctorInfo = dataDoctor.find(function(doctor) {
        return doctor.name === newName;
      });
    },
  },
  created() {
    this.doctorInfo = dataDoctor.find(doctor => doctor.name === this.name);
  },
};
</script>












<style scoped>
.doctor-info-container {
  border-radius: 10px;
  border: 4px solid white;
  background-color: #f5cba7;
  padding: 15px;
  width: 400px;
  height: auto;
  box-sizing: border-box;
}

.doctor-image {
  max-width: 100%;
  border-radius: 5px;
}

.specialization {
  font-weight: bold;
}

p {
  margin-top: 10px;
}

.spatbutton {
  padding: 10px 15px;
  background-color: white;
  color: black;
  font-size: 1.5em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
