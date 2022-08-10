<template>
    <div class="feature py-5">
        <div class="container">
            <p class="fs-2 fw-bold text-center">TÍNH NĂNG NỔI BẬT</p>
            <div class="d-flex flex-wrap justify-content-lg-between justify-content-center">
                <div
                    class="item d-flex flex-column align-items-center"
                    v-for="item in featureList"
                    :key="item.id"
                >
                    <img class="image my-3" :src="'../../' + item.image" alt />
                    <p class="fs-4 mb-2 fw-bold text-center">{{ item.title }}</p>
                    <p class="fs-4 text-center">{{ item.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
// create value
const featureList = ref([
    { id: 1, title: 'Hạ tầng mạnh mẽ', image: 'public/images/web-hosting-feature-1.png', content: 'Cấu hình máy chủ cao cấp sử dụng Chipset Intel E5-2678 V3/V4 cùng RAM DDR4 mới nhất hiện nay mang lại hiệu xuất xử lý vượt trội cho website của bạn.' },
    { id: 2, title: 'Truy xuất nhanh – Tăng tốc xử lý', image: 'public/images/web-hosting-feature-2.png', content: 'Máy chủ sử dụng ổ cứng SSD cùng với công nghệ Webserver Litespeed cho tốc độ truy xuất nhanh, tăng tốc xử lý gấp 10 lần so với hệ thống thông thường' },
    { id: 3, title: 'R1 soft backup', image: 'public/images/web-hosting-feature-3.png', content: 'Phần mềm backup cho dịch vụ hosting mạnh nhất hiện nay. Cho phép Newzencloud backup hàng ngày cho khách hàng và lưu trữ liên tiếp tới 30 ngày. Khách hàng có thể tự thao tác restore dữ liệu một cách chủ động theo các bản backup đã có.' },
    { id: 4, title: 'An toàn bảo mật', image: 'public/images/web-hosting-feature-4.png', content: 'Phần mềm quản trị cPanel cùng với hệ điều hành Cloud Linux được sử dụng trên máy chủ hosting Newzencloud giúp ngăn chặn 99,99% nguy cơ tấn công Local-Attack' },
    { id: 5, title: 'One click', image: 'public/images/web-hosting-feature-5.png', content: 'Hỗ trợ cài đặt tự động với hơn 350 bộ mã nguồn PHP phổ biến chỉ với 1 click chuột, sau 30 giây, quý khách có ngay website theo ý mình' },
    { id: 6, title: 'Trải nghiệm 7 ngày miễn phí', image: 'public/images/web-hosting-feature-6.png', content: 'Đăng ký dùng thử ngay trong 7 ngày mà không phải trả thêm bất kỳ chi phí nào' },
])
</script>

<style lang="scss" scoped>
.feature {
    .item {
        width: 380px;
        .image {
            width: 200px;
            height: 200px;
        }
    }
}
</style>