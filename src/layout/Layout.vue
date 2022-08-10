<template>
    <Header></Header>
    <InfoBar></InfoBar>
    <ScrollTopBtn></ScrollTopBtn>
    <div class="page-render">
        <router-view></router-view>
    </div>
    <Footer></Footer>

    
</template>

<script lang="ts" setup>
    import Header from "@/layout/header/Header.vue";
    import Footer from "@/layout/footer/Footer.vue";
    import InfoBar from "@/layout/header/InfoBar.vue";
    import ScrollTopBtn from "@/layout/extra/SrollTopButton.vue";
</script>
