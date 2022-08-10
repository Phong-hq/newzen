<template>
    <div class="register py-4">
        <div class="container">
            <el-form class="d-flex flex-column align-items-center">
                <p class="fs-4 fw-bold text-center">Đăng kí nhanh dịch vụ của Newzencloud</p>
                <p
                    class="fs-6 text-center"
                >Quý khách vui lòng gửi yêu cầu cho BKNS, chúng tôi sẽ liên hệ lại ngay với bạn.</p>
                <div class="d-flex justify-content-center flex-wrap">
                    <el-input
                        v-model="input1"
                        type="text"
                        class="mx-2 my-3"
                        placeholder="Dịch vụ đăng kí"
                    ></el-input>
                    <el-input
                        v-model="input2"
                        type="text"
                        class="mx-2 my-3"
                        placeholder="Số điện thoại"
                    ></el-input>
                    <el-input v-model="input3" type="text" class="mx-2 my-3" placeholder="Email"></el-input>
                </div>
                <el-button class="fs-6 my-3 fw-bold" color="#0DD4D4">Đăng kí</el-button>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
const input1 = ref('');
const input2 = ref('');
const input3 = ref('');
</script>

<style lang="scss" scoped>
.register {
    background-color: #f1f4fe;
    button {
        &::v-deep span {
            color: #fff;
        }
    }
    .el-input {
        width: 270px;
        &::v-deep{
            input {
                height: 50px;
                border: none;
                background-color: #fff !important;
                box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.15);
            }
        }
    }
}
</style>