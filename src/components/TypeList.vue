<template>
    <div class="type-list mb-4">
        <div class="container">
            <div class="py-2 d-flex flex-center flex-wrap">
                <div v-for="item in typeList" :key="item.id">
                    <el-button
                        class="mx-3 my-2"
                        :class="typeActive.id == item.id ? 'active' : ''"
                        @click="typeActive.id = item.id, $emit('select', typeActive)"
                    >{{ item.type_name }}</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import ProductDefine from '@/core/file-Json/product-define.json'
import { onMounted, ref, defineProps, defineEmits, watch } from 'vue';

interface ITypeList {
    type_name: string | null;
    id: number;
    product_list: Array<IProductList>;
    data_list: Array<IDataList>;
}
interface IProductList {
    code: string | null;
    name: string;
    price_per_month: number;
    price_total: number;
    infomation: Array<IInfomation>;
}
interface IDataList {
    data_name: string | null;
    discount: number;
    id: number;
}
interface IInfomation {
    title: string
}

const props = defineProps({
    typeList: {
        type: Array || null,
        required: true,
    }
});
const emit = defineEmits(['select'])
onMounted(() => {
    typeList.value = props.typeList
    typeActive.value.id = typeList.value[0].id
})
// create value
const typeList = ref<any>([])
const typeActive = ref({
    id: -1,
})

// create function
</script>

<style lang="scss" scoped>
.type-list {
    background-color: #f1f4fe;
    button {
        font-size: 18px;
        height: 50px;
        &.active {
            background-color: #0dd4d4 !important;
            color: #fff;
            &::v-deep span {
                color: #fff;
            }
        }
        &::v-deep span {
            font-weight: 700;
        }
    }
}
</style>