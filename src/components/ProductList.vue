<template>
    <div class="product-list py-5">
        <div class="container">
            <div class="d-flex justify-content-center flex-wrap">
                <div class="product-item m-3 pb-5" v-for=" item in productList" :key="item.id">
                    <div class="product-top px-4 pt-4">
                        <p class="fs-4 fw-bold">{{ item.name }}</p>
                        <p class="fs-6 mb-1">Thanh toán tối thiểu 12 tháng</p>
                        <p
                            class="fs-18 text-red fw-bold"
                        >{{ item.price_per_month.toLocaleString() }}đ/tháng</p>
                    </div>
                    <div class="divide"></div>
                    <div class="product-bottom px-4 pt-3">
                        <div
                            class="mb-2 d-flex align-items-start"
                            v-for="(item2, i) in item.infomation"
                            :key="i"
                        >
                            <img src="../../../public/images/home-service-check.png" />
                            <p class="fs-6 lh-1 ms-2 mb-0 text-start">{{ item2.title }}</p>
                        </div>
                        <p
                            class="fs-18 text-red fw-bold"
                        >{{ item.price_total.toLocaleString() }}đ/12tháng</p>
                        <el-button type="primary fst-italic">Đăng ký ngay</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import ProductDefine from '@/core/file-Json/product-define.json'
import { onMounted, ref, defineProps, defineEmits, watch } from 'vue';

interface IProductList {
    code: string | null;
    name: string;
    price_per_month: number;
    id: number;
    price_total: number;
    infomation: Array<IInfomation>;
}
interface IInfomation {
    title: string
}

const props = defineProps({
    productList: {
        type: Array || null,
        required: true,
    }
});
// const emit = defineEmits(['select'])
onMounted(() => {
    productList.value = props.productList
})
// create value
const productList = ref<Array<IDataList>>([])


// create function

</script>

<style lang="scss" scoped>
.product-list {
    .product-item {
        width: 380px;
        // min-height: 576px;
        background-color: #fafbff;
        border-radius: 20px;
        box-shadow: 1px 1px 4px #ced4f1;
        .divide {
            width: 100%;
            border-top: dashed 1px #b6b6b6;
        }
        button {
            border-radius: 10px;
           &::v-deep span {
                color: #fff;
            }
        }
    }
}
</style>