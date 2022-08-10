<template>
    <div class="data-list">
        <div class="container">
            <div class="py-2 d-flex flex-center flex-wrap">
                <div v-for="item in dataList" :key="item.id">
                    <el-button
                        class="mx-3 my-2 d-flex flex-center text-dark"
                        :class="dataActive.id == item.id ? 'active' : ''"
                        @click=" dataActive.id = item.id, $emit('select',dataActive)"
                    >
                        {{ item.data_name }}
                        <div class="discount">-{{ item.discount }}%</div>
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import ProductDefine from '@/core/file-Json/product-define.json'
import { onMounted, ref, defineProps, defineEmits, watch } from 'vue';

interface IDataList {
    data_name: string | null;
    discount: number;
    id: number;
}

const props = defineProps({
    dataList: {
        type: Array || null,
        required: true,
    }
});
const emit = defineEmits(['select'])
onMounted(() => {
    dataList.value = props.dataList
    dataActive.value.id = dataList.value[0].id
})
// create value
const dataList = ref<Array<IDataList>>([])
const dataActive = ref({
    id: -1
})

// create function
</script>

<style lang="scss" scoped>
.data-list {
    background-color: #f1f4fe;
    button {
        font-size: 18px;
        height: 50px;
        border-radius: 8px;
        .discount {
            width: 70px;
            height: 30px;
            font-size: 18px;
            text-align: center;
            border-radius: 10px;
            box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 5px;
        }
        &.active {
            background-color: #1b6cef;
            &::v-deep span{
                color: #fff !important;
            }
            .discount {
                background-color: #fff;
                color: #1b6cef;
            }
        }
        &::v-deep{
            span,
            .discount {
                font-weight: 700;
            }
        }
    }
}
</style>