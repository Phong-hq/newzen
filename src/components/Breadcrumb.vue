<template>
    <el-breadcrumb class="position-absolute start-0 top-0 ms-2 mt-4" :separator-icon="DArrowRight">
        <el-breadcrumb-item v-for="(item, i) in breadcrumbList" :key="i" class="my-1">
            <a v-if="item.path != ''" :href="item.path">{{ item.name }}</a>
            <p v-else class="mb-0">{{ item.name }}</p>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>



<script lang="ts" setup>
import { onMounted, ref, defineProps } from 'vue';
import { ArrowRight, DArrowRight } from '@element-plus/icons-vue'

interface IBreadcrumb {
    path: string;
    name: string;
}

const props = defineProps({
    dataList: {
        type: Array || null,
        required: true,
    }
})

onMounted(() => {
    breadcrumbList.value = props.dataList
})

const breadcrumbList = ref<Array<IBreadcrumb>>([
])
</script>