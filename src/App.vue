<script setup lang="ts">
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->
  <main class="w-100">
    <router-view/>
    <!-- <TheWelcome /> -->
  </main>
</template>

<style lang="scss">
@import './assets/base.css';
@import './assets/scss/style.scss';
@import 'element-plus/dist/index.css';
@import 'sweetalert2/src/sweetalert2.scss';
@import 'vue3-carousel/dist/carousel.css';

// @import "../node_modules/element-plus/lib/theme-chalk/index.css";
// @import "../node_modules/element-plus/lib/compoments";



header {
  line-height: 1.5;
}
#app {
  overflow: hidden;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
  }

  #app {
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
    max-width: 100vw;
    overflow: hidden;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
