<template>
    <div class="title-block container py-4 d-flex justify-content-center">
        <img class="double-arrow m-0" src="../../../public/images/home-double-arrow.png" />
        <p class="fs-2 mx-4 mb-0 fw-bold text-center">{{title}}</p>
        <img
            class="double-arrow m-0"
            src="../../../public/images/home-double-arrow.png"
            style="transform: rotate(180deg);"
        />
    </div>
</template>

<script lang="ts" setup>
import {defineProps, onMounted, ref} from 'vue';

const props = defineProps({
    title:{
      type : String,
      required: true
  },
})
onMounted(() => {
     title.value = props.title
})

// custom value
const title = ref('')
</script>

<style lang="scss">
.title-block{
    .double-arrow{
        width: 56px;
        height: 41px;
    }
    p{
        max-width: 550px;
    }
    @media (max-width: 576px) {
      .double-arrow{
        width: 34px;
        height: 25px;
    } 
       p{
        max-width: unset;
    }
    }
}

</style>