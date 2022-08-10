import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import "bootstrap/dist/css/bootstrap.min.css"
import VueSmoothScroll from 'vue3-smooth-scroll'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
// const myCarousel = require('vue3-carousel');
// import { Carousel, Slide, Pagination, Navigation } from 'myCarousel';


const app = createApp(App)

app.use(router);
app.use(ElementPlus);
app.use(VueSmoothScroll);
app.use(Slide);
app.use(Carousel);
// app.directive("inline", (element) => {
//     element.replaceWith(...element.children);
//   });

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"
