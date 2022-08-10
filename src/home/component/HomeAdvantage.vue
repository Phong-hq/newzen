<template>
    <div class="container">
        <div class="d-flex justify-content-lg-between justify-content-center flex-wrap">
            <div
                class="advantage-item d-flex flex-column align-items-center"
                v-for="item in advantageList"
                :key="item.id"
            >
                <img class="advantage-image my-3" src="../../../public/images/home-advantage-1.png" />
                <p class="line-1 fs-4 text-center fw-bold">{{ item.title }}</p>
                <p class="line-2 fs-6 text-center">{{ item.content }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue';
import '@/assets/scss/home/home-advantage.scss'


// create value
const advantageList = ref([
    { id: 0, image: 'public/images/home-advantage-1.png', title: "Đội ngũ nhân viên chuyên nghiệp", content: "Chúng tôi luôn muốn đem đến những dịch vụ tốt nhất với giá thành cạnh tranh để phục vụ quý khách tốt nhất." },
    { id: 0, image: 'public/images/home-advantage-2.png', title: "Vận hành ổn định An toàn", content: "Khi sử dụng dịch vụ bên Newzen Cloud luôn đảm bảo thời gian hoạt động lên đến 99%. Cấu hình mạnh, ổn định " },
    { id: 0, image: 'public/images/home-advantage-3.png', title: "Hỗ trợ khách hàng nhanh chống 24/7", content: "Hỗ trợ nhanh chống, kịp thời cho cá nhân, tổ chức, doanh nghiệp của bạn." },
])

</script>