<template>
    <div class="container">
        <Carousel :settings="settings" :breakpoints="breakpoints" :itemsToScroll="1">
            <Slide v-for="item in serviceList" :key="item.code">
                <div class="carousel__item">
                    <div class="w-100 py-4 d-flex flex-center">
                        <img src="../../../public/images/home-service-1.png" />
                    </div>
                    <div class="content pb-5 d-flex flex-column justify-content-start">
                        <p class="fs-4 fw-bold text-start">{{ item.name }}</p>
                        <p class="fs-6 text-start">{{ item.description }}</p>
                        <div
                            class="advantage-text mb-2 d-flex align-items-start"
                            v-for="item2 in item.advantageList"
                            :key="item2.id"
                        >
                            <img src="../../../public/images/home-service-check.png" />
                            <p class="fs-6 lh-1 ms-2 mb-0 text-start">{{ item2.description }}</p>
                        </div>
                        <p class="fs-5 mt-2 text-red text-start fw-bold">{{ item.price }}</p>
                        <a class="service-btn" :href="item.path">
                        <router-link  :to="{name: 'email'}">
                            <el-button type="primary">
                                Xem chi tiết
                                <el-icon class="ms-2">
                                    <DArrowRight />
                                </el-icon>
                            </el-button>
                        </router-link>
                        </a>
                    </div>
                </div>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </div>
</template>

<script lang="ts" setup>
import '@/assets/scss/home/home-service.scss'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { ArrowRight, DArrowRight } from '@element-plus/icons-vue'
import { ref } from 'vue';

// import Service1 from '../../../public'

// create value
const settings = ref({
    itemsToShow: 3,
    snapAlign: 'center',
})
const breakpoints = ref({
    0: {
        itemsToShow: 1,
        snapAlign: 'center',
    },
    992: {
        itemsToShow: 3,
        snapAlign: 'center',
    },
})

const serviceList = ref([
    {
        code: 0, image: 'public/images/home-service-1.png', name: 'Web Hosting', description: 'Dịch vụ hosting tin cậy và hiệu suất cao, công nghệ quản lý tiên tiến giúp bạn vững tâm quản lý website.', price: '29.000đ/tháng',
        path: '/web-hosting',  advantageList: [
            { id: 0, description: 'Hỗ trợ 24/7' },
            { id: 1, description: 'Giá cả phải chăng' },
            { id: 2, description: 'Dễ dàng nâng cấp và downgrade' },
        ]
    },
    {
        code: 1, image: 'public/images/home-service-2.png', name: 'Phần mềm', description: 'Bản quyền các loại phần mềm thông dụng nhất hiện nay: Direct Admin, cPanel, Plesk 12, Cloudlinux,....', price: '1.275.000đ/tháng',
        path: '#',  advantageList: [
            { id: 0, description: 'Hỗ trợ 24/7' },
            { id: 1, description: 'Giá cả phải chăng' },
            { id: 2, description: 'Dễ dàng nâng cấp ' },
        ]
    },
    {
        code: 2, image: 'public/images/home-service-3.png', name: 'Chỗ đặt máy chủ', description: 'Dịch vụ dành cho các doanh nghiệp, các tổ chức, cá nhân đã có hoặc có khả năng để trang bị máy chủ', price: '1.275.000đ/tháng',
        path: '#',  advantageList: [
            { id: 0, description: 'Hỗ trợ 24/7' },
            { id: 1, description: 'Giá cả phải chăng' },
            { id: 2, description: 'Dễ dàng nâng cấp ' },
        ]
    },
    {
        code: 3, image: 'public/images/home-service-4.png', name: 'Email', description: 'Kinh doanh lớn nhỏ đều dùng email. Email là yếu tố quan trọng để bạn tiếp cận và giao dịch với khách hàng.', price: '45.000đ/tháng',
        path: '/email',  advantageList: [
            { id: 0, description: 'Tạo email thương hiệu công ty' },
            { id: 1, description: 'Hệ thống chống spam' },
            { id: 2, description: 'Chống virus và trả lời tự động' },
        ]
    },
    {
        code: 4, image: 'public/images/home-service-5.png', name: 'SLL Bảo mật', description: 'Sử dụng các sản phẩm bảo mật của chúng tôi để giúp bảo vệ an toàn cho website của bạn.', price: '29.000đ/tháng',
        path: '#',  advantageList: [
            { id: 0, description: 'Bảo mật dữ liệu' },
            { id: 1, description: 'Hỗ trợ cài đặt' },
            { id: 2, description: 'Giá cả phải chăng' },
        ]
    },
    {
        code: 5, image: 'public/images/home-service-6.png', name: 'Cloud VPS', description: 'Hệ thống Cloud của Newzencloud sử dụng giải pháp Parallels cloud sever (PCS) của hãng Paralles.', price: '140.000đ/tháng',
        path: '#',  advantageList: [
            { id: 0, description: 'Hiệu suất cao, ổn định' },
            { id: 1, description: 'Hỗ trợ chuyển dữ liệu' },
            { id: 2, description: 'Miễn phí cài đặt' },
        ]
    },
])

</script>