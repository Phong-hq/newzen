<template>
    <div class="info-bar d-lg-block d-none w-100">
        <div class="container h-100 d-flex justify-content-between align-items-center">
            <div class="px-2" v-for="(item, i) in nameList" :key="i">
                <span
                    class="fs-6 badge rounded-pill bg-light text-dark"
                    data-bs-toggle="modal"
                    :data-bs-target="'#' + item.href"
                >{{ item.name }}</span>
            </div>
        </div>
        <div v-for="(modal , h) in InfomationList" :key="h">
            <div  class="modal fade" :id="modal.id" tabindex="-1" aria-hidden="true">
                <div class="mw-900px modal-dialog modal-dialog-centered flex-column">
                    <div class="modal-content">
                        <div class="info-bar-modal flex-row justify-content-center w-100 card">
                            <div
                                class="p-3"
                                v-for="(item, i) in modal.categoryList"
                                :key="i"
                                style="background-color: #fff; border-right: solid 1px #e8e8e8"
                            >
                                <div class="card-header">{{ item.title }}</div>
                                <div v-if="item.style == 1" class="card-content mt-3">
                                    <p class="fs-6 mb-2 fw-bold">{{ item.contentBold }}</p>
                                    <p class="fs-6" v-html="item.content"></p>
                                </div>
                                <div v-else class="card-content mt-3">
                                    <div v-for="(item2, j) in item.contentList" :key="j">
                                        <div class="d-flex align-items-center">
                                            <div class="circle"></div>
                                            <p class="fs-6 mb-0 ms-2 fw-bold">{{ item2.content1 }}</p>

                                        </div>
                                    <p class="fs-6 mt-2" v-html="item2.content2"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineComponent, reactive, toRefs, onMounted, ref, watch } from "vue";
const nameList = ref([
    { name: 'Tên miền', href: 'info-bar-1' },
    { name: 'Hosting', href: 'info-bar-2' },
    { name: 'Cloud', href: 'info-bar-3' },
    { name: 'Máy chủ', href: 'info-bar-4' },
    { name: 'Máy chủ', href: 'info-bar-4' },
    { name: 'Website', href: 'info-bar-5' },
    { name: 'Hướng dẫn', href: 'info-bar-6' },
    { name: 'Khuyến mãi', href: 'info-bar-7' },
])
const InfomationList1 = ref([
    { style: 1, title: 'Tên miền là gì?', contentBold: 'Tên miền', content: 'Giống như số nhà để cho mọi người biết nơi bạn sinh sống, tên miền là một địa chỉ định danh dẫn tới website của bạn đã được chứa trên host. Hãy đăng ký tên miền ngay hôm nay để bảo vệ thương hiệu và giúp khách hàng dễ dàng kết nối, tìm kiếm website của bạn trên internet.' },
    {
        style: 2, title: 'Đăng ký hoặc chuyển đổi',
        contentList: [
            { content1: 'Đăng kí tên miền', content2: 'Cùng Newzencloud bảo vệ thương hiệu của bạn trên website nào' },
            { content1: 'Kiểm tra tên miền', content2: 'Nhập tên miền bạn muốn kiểm tra.<span><a href="#"> Tại đây</a><span>.' },
            { content1: 'Bảng giá tên miền', content2: 'Giảm 10%: Tên miền Việt Nam+Tên miền quốc tế' },
            { content1: 'Chuyển tên miền thành Newzencloud', content2: 'Chuyển tên miền từ nhà đăng ký khác thành Newzencloud' }
        ]
    },
    {
        style: 2, title: 'Thông tin cần biết',
        contentList: [
            { content1: 'Quy trình đăng ký', content2: 'Thủ tục, quy trình đơn giản, hợp lý.' },
            { content1: 'Các biểu mẫu văn bản', content2: 'Biểu mẫu văn bản soạn sẵn' },
            { content1: 'Thủ tục chuyển nhượng tên miền VN', content2: 'Đảm bảo website hoạ động không bị gián đoạn' },
            { content1: 'Quy trình xử lý khiếu nại', content2: 'Chi tiết các bước thực hiện' }
        ]
    },
]);
const InfomationList = ref([
    {
        id: 'info-bar-1', category: 'ten mien', 
        categoryList: [
            { style: 1, title: 'Tên miền là gì?', contentBold: 'Tên miền', content: 'Giống như số nhà để cho mọi người biết nơi bạn sinh sống, tên miền là một địa chỉ định danh dẫn tới website của bạn đã được chứa trên host. Hãy đăng ký tên miền ngay hôm nay để bảo vệ thương hiệu và giúp khách hàng dễ dàng kết nối, tìm kiếm website của bạn trên internet.' },
            {
                style: 2, title: 'Đăng ký hoặc chuyển đổi',
                contentList: [
                    { content1: 'Đăng kí tên miền', content2: 'Cùng Newzencloud bảo vệ thương hiệu của bạn trên website nào' },
                    { content1: 'Kiểm tra tên miền', content2: 'Nhập tên miền bạn muốn kiểm tra.<span><a href="#"> Tại đây</a><span>.' },
                    { content1: 'Bảng giá tên miền', content2: 'Giảm 10%: Tên miền Việt Nam+Tên miền quốc tế' },
                    { content1: 'Chuyển tên miền thành Newzencloud', content2: 'Chuyển tên miền từ nhà đăng ký khác thành Newzencloud' }
                ]
            },
            {
                style: 2, title: 'Thông tin cần biết',
                contentList: [
                    { content1: 'Quy trình đăng ký', content2: 'Thủ tục, quy trình đơn giản, hợp lý.' },
                    { content1: 'Các biểu mẫu văn bản', content2: 'Biểu mẫu văn bản soạn sẵn' },
                    { content1: 'Thủ tục chuyển nhượng tên miền VN', content2: 'Đảm bảo website hoạ động không bị gián đoạn' },
                    { content1: 'Quy trình xử lý khiếu nại', content2: 'Chi tiết các bước thực hiện' }
                ]
            },
        ]
    },
    {
        id: 'info-bar-2', category: 'hosting',
        categoryList: [
            { style: 1, title: 'Hosting là gì?', contentBold: 'Hosting', content: '-Dịch vụ được vận hành trên hệ thống Newzenclow để đảm bảo uptime 99%<br><br> -Toàn bộ dữ liệu được lưu trữ trên hệ thống cho tốc độ truy cập nhanh gấp 2 lần ổ SSD và an toàn tuyệt đối trước lỗi phần cứng.<br><br> -Sử dụng hệ điều hành của NewzenCloud giúp hosting ổn định, an toàn tuyệt đối trước tấn công Local hack.' },
            {
                style: 2, title: 'Đăng ký hosting',
                contentList: [
                    { content1: 'Hosting Linux cPanel', content2: 'Giảm giá đến 40%' },
                    { content1: 'Hosting Linux DirectAdmin', content2: 'Giảm 15% : Hosting + Domain.' },
                    { content1: 'Hosting windows', content2: 'Giảm 20% : Hosting + Domain + Email' },
                    { content1: 'Hosting Seo', content2: '' }
                ]
            },
            {
                style: 2, title: 'Đăng ký hosting',
                contentList: [
                    { content1: 'Hosting wordpress', content2: 'Giảm 20%: Chuyển dịch vụ về Newzencloud' },
                    { content1: 'Reseller Hosting DirectAdmin', content2: 'Nhanh hơn với 100% ổ cứng SSD Enterprise' },
                    { content1: 'Reseller Hosting Cpanel', content2: 'Nhanh hơn với 100% ổ cứng SSD Enterprise' },
                ]
            },
        ]
    },
    {
        id: 'info-bar-3', category: 'cloud',
        categoryList: [
            { style: 1, title: 'Cloud VPS là gì?', contentBold: 'Cloud VPS', content: 'Hệ thống máy chủ ảo, sử dụng điện toán đám mây, đảm bảo độ tin cậy, hiệu quả về giá thành, tốc độ xử lý và khả năng mở rộng dễ dàng.' },
            {
                style: 2, title: 'Dịch vụ',
                contentList: [
                    { content1: 'Cloud VPS SSD', content2: 'Giảm giá đến 35%' },
                    { content1: 'Cloud VPS SSD - SEO', content2: 'Dành riêng cho SEO Với 5 IP' },
                    { content1: 'Cloud VPN', content2: 'Cho quý khách chọn dịch vụ mạng riêng ảo' },
                ]
            },
            {
                style: 2, title: 'Dịch vụ',
                contentList: [
                    { content1: 'E meeting', content2: 'Giải pháp học trực tuyến' },
                    { content1: 'VPS MMO', content2: 'Giải pháp học trực tuyến' },
                    { content1: 'Dịch vụ CND', content2: 'Dịch vụ hỗ trợ tăng tốc, tối ưu và bảo vệ website' },
                ]
            },
        ]
    },
    {
        id: 'info-bar-4', category: 'may chu',
        categoryList: [
            { style: 1, title: 'Máy chủ là gì?', contentBold: 'Máy chủ', content: 'Hệ thống máy chủ ảo, sử dụng điện toán đám mây, đảm bảo độ tin cậy, hiệu quả về giá thành, tốc độ xử lý và khả năng mở rộng dễ dàng.' },
            {
                style: 2, title: 'Máy chủ',
                contentList: [
                    { content1: 'Cho thuê máy chủ', content2: 'Thuê máy chủ tặng máy chủ' },
                    { content1: 'Thuê chỗ đặt máy chủ', content2: 'Miễn phí 500W điện' },
                    { content1: 'Máy chủ cho MMO', content2: 'Tương tác tốt nhất với Youtube, Face, GG, MMO' },
                    { content1: 'Thuê tủ RACK', content2: 'Cho quý khách chọn dịch vụ mạng riêng ảo' },
                ]
            },
            {
                style: 2, title: 'Thông tin cần biết',
                contentList: [
                    { content1: 'Dịch vụ quản trị máy chủ', content2: 'Yên tâm, an toàn dữ liệu.' },
                    { content1: 'Các dịch vụ liên quan đến máy chủ', content2: 'Tiết kiệm chi phí, nguồn lực và hạ tầng.' },
                ]
            },
        ]
    },
    {
        id: 'info-bar-5', category: 'phan men',
        categoryList: [
            { style: 1, title: 'Phần mềm', contentBold: '', content: 'Các loại phần mềm đang thông dụng nhất hiện nay' },
            {
                style: 2, title: 'Máy chủ',
                contentList: [
                    { content1: 'Direct Admin', content2: 'Phần mềm hữu ích, ổn định, chi phí thấp' },
                    { content1: 'ThCPanel', content2: 'Quản trị hosting và máy chủ tốt nhất' },
                    { content1: 'Plesk Onyx', content2: 'Quản lý hiệu quả, linh hoạt và bảo mật' },
                    { content1: 'CloudLinux', content2: 'Hệ điều hành chuyên biệt dành cho điện toán đám mây.' },
                    { content1: 'LiteSpeed', content2: 'Phần mềm tăng tốc độ xử lý và hiệu suất của webserver' },
                    { content1: 'Softaculous', content2: 'Công cụ cho phép tự động cài đặt các mã nguồn.' },
                    { content1: 'Imunify360', content2: 'Được xây dựng dựa trên công nghệ AI và chủ động phòng thủ bảo vệ server' },
                ]
            },
            {
                style: 2, title: 'Thông tin cần biết',
                contentList: [
                    { content1: 'Bản quyền vBulletin', content2: 'Bảng giá bảng quyền vBulletin tại Newzencloud' },
                ]
            },
        ]
    },
    {
        id: 'info-bar-6', category: 'website',
        categoryList: [
            { style: 1, title: 'Website', contentBold: 'Thiết kế website', content: 'Chúng tôi mang đến cho quý khách những giao diện website tuyệt đẹp, thể hiện cá tính độc đáo, gần gũi, thiết thực. Làm cho việc kinh doanh hay quảng bá của quý khách trên internet chưa bao giờ dễ dàng đến thế.' },
            {
                style: 2, title: 'Website theo yêu cầu',
                contentList: [
                    { content1: 'Thiết kế website', content2: 'Đội ngũ thiết kế website chuyên nghiệp, kho giao diện mẫu lớn, phong phú và đa dạng, khách hàng thoải mái lựa chọn.' },
                ]
            },
            {
                style: 2, title: 'Quảng cáo website',
                contentList: [
                    { content1: 'Quảng cáo', content2: 'Dịch vụ quảng cáo website lên google - Google Adwords' },
                ]
            },
        ]
    },
    {
        id: 'info-bar-7', category: 'huong dan',
        categoryList: [
            { style: 1, title: 'Hướng dẫn', contentBold: '', content: 'Tập hợp những nội dung hữu ích trong quá trình đăng kí và sử dụng dịch vụ của Newzencloud' },
            { style: 1, title: 'Hướng dẫn dịch vụ', contentBold: '', content: 'Tập hợp những nội dung hữu ích trong quá trình đăng kí và sử dụng dịch vụ của Newzencloud' },
            { style: 1, title: 'Hướng dẫn thanh toán', contentBold: '', content: 'Tập hợp những nội dung hữu ích trong quá trình đăng kí và sử dụng dịch vụ của Newzencloud' },
        ]
    },
])
</script>