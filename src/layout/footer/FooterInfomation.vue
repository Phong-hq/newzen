<template>
    <div class="footer-infomation container">
        <div class="px-3 py-5">
            <a href="/">
                <img class="logo m-0" src="../../../public/images/logo.png" alt="logo" />
            </a>
            <div class="mt-5 d-flex justify-content-between flex-wrap">
                <div class="mt-4 m-lg-0" v-for="(item, i) in informationList" :key="i">
                    <p class="mb-1 fw-bold">{{ item.title }}</p>
                    <div class="dash mb-3"></div>
                    <a v-for="(item2, x) in item.children" :key="x" :href="item2.href">
                        <p class="mb-1 text-black">{{ item2.content }}</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// custom value
const informationList = ref([
    {
        title: 'Về chúng tôi', children: [
            { content: 'Thông báo', href: "#" },
            { content: 'Tuyển dụng nhân sự', href: "#" },
            { content: 'Hướng dẫn sử dụng', href: "#" },
            { content: 'Chi tiết liên hệ', href: "#" },
        ]
    },
    {
        title: 'Các dịch vụ', children: [
            { content: 'Đăng kí tên miền', href: "#" },
            { content: 'Hosting', href: "#" },
            { content: 'Dịch vụ email', href: "#" },
            { content: 'Thuê máy chủ', href: "#" },
            { content: 'Thiết kế website', href: "#" },
        ]
    },
    {
        title: 'Thông tin cần biết', children: [
            { content: 'Quy định sử dụng', href: "#" },
            { content: 'Chính sách riêng tư', href: "#" },
            { content: 'Tư vấn chọn hosting', href: "#" },
            { content: 'Tư vấn chọn tên miền đẹp', href: "#" },
            { content: 'Tư vấn thiết kế website', href: "#" },
        ]
    },
    {
        title: 'Câu hỏi thường gặp', children: [
            { content: 'Hỏi đáp về dịch vụ tên miền', href: "#" },
            { content: 'Những điều cần biết về hosting', href: "#" },
            { content: 'Dịch vụ máy chủ như thế nào?', href: "#" },
            { content: 'Thiết kế website giá bao nhiêu?', href: "#" },
        ]
    },
])
</script>