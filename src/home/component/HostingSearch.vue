<template>
    <div class="search me-sm-3 mb-3 d-flex flex-wrap justify-content-center justify-content-sm-start flex-column flex-sm-row align-items-center">
        <div class="position-relative">
            <el-select
                v-model="value"
                class="hosting-select me-3 position-absolute top-50 translate-middle-y end-0"
                placeholder="Select"
                style="z-index: 2"
            >
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
            <img
                class="ms-2 position-absolute top-50 translate-middle-y left-0"
                src="../../../public/images/search.png"
                style="z-index: 2;"
            />
            <input
                type="text"
                class="search-input me-1 ps-8 form-control"
                placeholder="Nhập tên miền bạn muốn kiểm tra"
            />
        </div>
        <el-button type="primary">Kiểm tra</el-button>
    </div>
</template>

<script lang="ts" setup>
import '@/assets/scss/home/hostting-search.scss'
import { defineComponent, ref } from 'vue'


// defineComponent({
//     setup(props, ctx) {
//         return { HostingCarousel }
//     }
// });

const value = ref('asia')

const options = ref([
    {
        value: 'asia',
        label: '.asia',
    },
    {
        value: 'mobi',
        label: '.mobi',
    },
        {
        value: 'pro',
        label: '.pro',
    },
        {
        value: 'top',
        label: '.top',
    },
        {
        value: 'org',
        label: '.org',
    },
        {
        value: 'xyz',
        label: '.xyz',
    },
        {
        value: 'site',
        label: '.site',
    },
        {
        value: 'club',
        label: '.club',
    },
        {
        value: 'space',
        label: '.space',
    },
        {
        value: 'info',
        label: '.info',
    },
    
])
</script>