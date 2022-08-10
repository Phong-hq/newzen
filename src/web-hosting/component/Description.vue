<template>
    <div class="description py-5">
        <div class="container">
            <div class="d-flex justify-content-lg-between justify-content-center flex-wrap">
                <div class="position-relative" v-for="item in descriptionButton" :key="item.id">
                    <el-button
                        class="fs-6 fw-bold my-4"
                        :class="item.id == descriptionButtonActive ? 'active' : ''"
                        @click="descriptionButtonActive = item.id"
                    >
                        <div class="render-html" v-html="item.name"></div>
                    </el-button>
                    <img
                        v-if="item.id == descriptionButtonActive"
                        class="position-absolute start-50 translate-middle-x d-lg-block d-none"
                        src="../../../public/images/web-hosting-description.png"
                    />
                </div>
                <div class="description-content p-3 mt-5">
                    <p
                        class="fs-18 fw-bold"
                    >Các tính năng ưu việt của Hosting Linux, bao gồm: Hosting Directadmin và Hosting Cpanel:</p>
                    <p
                        class="fs-6 mb-3"
                    >Chạy trên các hệ thống máy chủ DELL, HP với bộ nhớ RAM lên tới 64GB, đồng thời sử dụng mỗi server 2 CPU dòng 6 hoặc 8 core. Cam kết không sử dụng swap.</p>
                    <p
                        class="fs-6 mb-1"
                    >-Khách hàng có thể kiểm tra ngay trong phần Server information.</p>
                    <p
                        class="fs-6 mb-1"
                    >-Lưu trữ trên hệ thống Cloud SSD 100% giúp tốc độ load trang cực nhanh.</p>
                    <p
                        class="fs-6 mb-1"
                    >-Sử dụng cổng mạng 1G cho kết nối internet giúp việc download/upload dữ liệu từ máy chủ cực nhanh.</p>
                    <p
                        class="fs-6 mb-1"
                    >-Sử dụng CloudLinux giúp bảo vệ tuyệt đối trước local hack, khách hàng có thể tùy chỉnh phiên bản PHP cũng như các thông số PHP nếu muốn, dùng Litespeed giúp website chạy nhanh gấp 6 lần so với các webserver sử dụng Apache.</p>
                    <p class="fs-6 mb-1">-Thông tin tham khảo: https://www.newzencloud.com</p>
                    <p
                        class="fs-6 mb-1"
                    >-Sử dụng Softaculous Auto Installer giúp việc cài đặt hơn 400 bộ mã nguồn PHP chỉ trong 30s với vài thao tác click chuột.</p>
                    <p
                        class="fs-6 mb-1"
                    >-Khách hàng được hỗ trợ backup / restore miễn phí với 2 lần/tuần.</p>
                    <p
                        class="fs-6 mb-1"
                    >-Đặc biệt với Hosting Cpanel, khách hàng sẽ được hỗ trợ miễn phí SSL cho tất cả các tên miền trên host trong suốt thời gian sử dụng. Quý khách tìm hiểu cách cài đặt SSL miễn phí tại đây.</p>
                    <p
                        class="fs-6 mb-3"
                    >-Một số demo, host hỗ trợ cài sẵn và cài được rất nhiều bộ code PHP khác nhau. Đây là một số demo với các bộ code thường gặp, chú ý: các cài đặt này hoàn toàn mặc định của cả code lần của host, không một code nào là host không đáp ứng được tính năng yêu cầu:</p>
                    <p class="fs-6 fw-bold mb-1">-WordPress</p>
                    <p class="fs-6 fw-bold mb-1">-Joomla:</p>
                    <p class="fs-6 fw-bold mb-1">-NukeViet:</p>
                    <p class="fs-6 fw-bold mb-1">-Drupal:</p>
                    <p class="fs-6 fw-bold mb-1">-Pretashop:</p>
                    <p class="fs-6 fw-bold mb-1">-OpenCart:</p>
                    <p class="fs-6 fw-bold mb-1">-Magento:</p>
                    <p class="fs-6 fw-bold mb-1">-Moodle:</p>
                    <p class="fs-6 fw-bold mb-3">-PHPBB:</p>
                    <p
                        class="fs-6 mb-1"
                    >Trên đây là những tính năng của Hosting Linux mà Newzencloud muốn chia sẻ với bạn. Mong rằng nó sẽ hữu ích với bạn!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';


// create value
const descriptionButton = ref([
    { id: 0, name: "CÁC TÍNH NĂNG ƯU VIỆT <br> CỦA HOSTING LINUX", },
    { id: 1, name: "HƯỚNG DẪN CÀI ĐẶT SSL FREE <br> TRÊN HOSTING CPANEL", },
    { id: 2, name: "ĐẶC ĐIỂM CỦA <br> HOSTING LINUX", },
])
const descriptionButtonActive = ref(0)
</script>
<style lang="scss" scoped>
.description {
    background-color: #f1f4fe;
    button {
        width: 380px;
        height: 70px;
        color: #2f2f2f;
        border: none;
        box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.15);
        line-height: 1.3;
        &.active {
            background-color: #1b6cef;
            .render-html {
                color: #fff;
            }
        }
    }
    img {
        // bottom: -5px;
        width: 200px;
        height: 10px;
    }
    .description-content {
        background-color: #fff;
        border-radius: 8px;
        p {
            line-height: 1.5;
        }
    }
}
</style>