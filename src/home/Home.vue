<template>
    <div class="home">
        <HomeBannerComponent></HomeBannerComponent>
        <!-- add responsive -->
        <div class="d-block d-sm-none py-4" style="background-color: #F2F5FE">
            <div class="container">
                <HostingSearchComponent></HostingSearchComponent>
            </div>
            <div class="container">
                <HostingCarouseComponent></HostingCarouseComponent>
            </div>
        </div>
        <!-- end add responsive -->

        <div class="service">
            <TitleBlock :title="'DỊCH VỤ NỔI BẬT'"></TitleBlock>
            <HomeServiveComponent></HomeServiveComponent>
        </div>

        <div class="advantage">
            <TitleBlock :title="'TẠI SAO BẠN NÊN LỰA CHỌN NEWZEN CLOUD'"></TitleBlock>
            <HomeAdvantageComponent></HomeAdvantageComponent>
        </div>
        <div class="promotion position-relative d-flex justify-content-center align-items-end">
            <HomePromotionComponent></HomePromotionComponent>

        </div>
    </div>
</template>

<script lang="ts" setup>
import HomeBannerComponent from "./component/HomeBanner.vue";
import TitleBlock from "@/components/TitleBlock.vue"
import HomeServiveComponent from "./component/HomeService.vue"
import HomeAdvantageComponent from "./component/HomeAdvantage.vue"
import HomePromotionComponent from "./component/HomePromotion.vue"
import HostingCarouseComponent from "./component/HostingCarouse.vue"
import HostingSearchComponent from "./component/HostingSearch.vue"
import { defineComponent, ref } from 'vue';

// create value

</script>
<style lang="scss">

</style>
