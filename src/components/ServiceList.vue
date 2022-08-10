<template>
    <div class="service-list">
        <div class="container">
            <div class="d-flex flex-center flex-wrap">
                <div v-for="item in serviceList" :key="item.id">
                    <el-button
                        class="m-3"
                        :class="item.id == serviceActive.id ? 'active' : ''"
                        @click=" serviceActive.id = item.id, $emit('select',serviceActive)"

                    >{{ item.name }}</el-button>
                </div>
                <!-- <div v-for="item in serviceList" :key="item.id">
                <el-button class="m-3" @click="selectItem(item.id)">{{ item.name }}</el-button>
                </div>-->
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import '@/assets/scss/components/service-list.scss'
import ProductDefine from '@/core/file-Json/product-define.json'
import { onMounted, ref, defineProps, defineEmits } from 'vue';

interface TServiceList {
    name: string;
    id: number;
}

const props = defineProps({
    serviceName: {
        type: String,
        required: true
    }
});
const emit = defineEmits(['select'])

onMounted(() => {
    // console.log('sa')

    for (let i in service) {
        if (i == props.serviceName) {
            for (let j = 0; j < service[i].length; j++) {
                serviceList.value.push({ name: '', id: -1 })
                serviceList.value[j].name = service[i][j].name
                serviceList.value[j].id = service[i][j].id
            }
        }
    }
    serviceActive.value.name = serviceList.value[0].name
    serviceActive.value.id = serviceList.value[0].id
    // emit('select', serviceActive.value)
})


// create value
const service = JSON.parse(JSON.stringify(ProductDefine));
const serviceList = ref<Array<TServiceList>>([])
const serviceActive = ref({
    name: "",
    id: -1,
})



// create function
const selectItem = (id) => {
    serviceActive.value.id = id
    // serviceActive.value.id = id
    emit('select', serviceActive.value)
}

</script>