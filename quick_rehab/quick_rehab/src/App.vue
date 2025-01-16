<template>
  <div>
    <header>
      <div>
        <nav>
          <router-link to="/">
            <img src="/public/rehab.jpg" alt="Logo" class="logo" />
          </router-link>
          <router-link to="/about" class="nav-link">O nás</router-link>
          <router-link to="/contact" class="nav-link">Kontakt</router-link>
          <div class="sss">
            <router-link to="/order" class="nav-link">Objednať sa</router-link>

          </div>
        </nav>
      </div>
    </header>

    <router-view />

    <footer>
      <MyFooter />
    </footer>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import { useReservationStore } from './stores/counter';
import MyFooter from '@/components/MyFooter.vue';

export default {
  components: {
    MyFooter,
  },

};
</script>

<style scoped>
.sss {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.sh {
  margin-left: auto;
  font-size: 0.8em;
}
</style>
