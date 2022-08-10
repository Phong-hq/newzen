<template>
    <div class="header w-100 container d-flex justify-content-between align-items-center">
        <a href="/">
            <img class="logo" src="../../../public/images/logo.png" alt="logo" />
        </a>
        <div class="d-lg-flex d-none align-items-center"> 
            <div class="search me-3 position-relative">
                <img
                    class="ms-2 position-absolute top-50 translate-middle-y left-0"
                    src="../../../public/images/search.png"
                    style="z-index: 2;"
                />
                <input type="text" class="ps-8 form-control" placeholder="Tìm kiếm..." />
            </div>

            <div class="hotline me-5 d-flex align-items-center">
                <img class="me-2" src="../../../public/images/phone-icon.png" alt="">
                <div>
                    <p class="mb-0 text-gray lh-1">Hotline</p>
                    <p class="mb-0 text-dark lh-1 fw-bold">0976022777</p>
                </div>

            </div>

            <div class="hotline d-flex align-items-center">
                <div>
                    <p class="mb-0 text-gray lh-1">Tài khoản</p>
                    <p class="mb-0 text-dark lh-1 fw-bold">Đăng ký/ đăng nhập</p>
                </div>

            </div>
        </div>

        <!-- add mobile button -->
        <div class=" d-lg-none d-flex justify-content-end">
            <el-button class="p-1"  color="#0DD4D4" size="large" ><img src="../../../public/images/header-user-icon.png" alt=""></el-button>
            <el-button class="p-1"  color="#0DD4D4" size="large" ><img src="../../../public/images/header-menu-icon.png" alt=""></el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>

const test = 'asd';
</script>