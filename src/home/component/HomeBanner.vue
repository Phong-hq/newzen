<template>
    <div class="banner posittion-relative">
        <img class="banner-img-2" src="../../../public/images/banner.png" alt="">
        <div class="banner-block d-flex align-items-sm-center align-items-start">
            <div
                class="hosting-carousel container d-flex flex-column align-items-lg-start align-items-sm-center"
            >
                <img class="mb-4" src="../../../public/images/hosting-text.png" />
                <img class="mb-4" src="../../../public/images/item-text.png" />

                <div class="d-none d-sm-block">
                    <HostingSearch></HostingSearch>
                </div>
                <div class="d-none d-sm-block">
                    <HostingCarousel></HostingCarousel>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import '@/assets/scss/home/home-banner.scss'
import HostingCarousel from "./HostingCarouse.vue"
import HostingSearch from "./HostingSearch.vue"
import { defineComponent, ref } from 'vue'


defineComponent({
    setup(props, ctx) {
        return { HostingCarousel }
    }
});

</script>