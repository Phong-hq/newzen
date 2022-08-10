<template>
    <div class="web-hosting">
        <div class="product-panner">
            <div class="container h-100 d-flex flex-column flex-center position-relative">
                <BreadcrumbComponent :dataList="breadcrumbList" :key="key1"></BreadcrumbComponent>
                <p class="fs-4 mb-1 fw-bold text-center">Hosting</p>
                <p class="fs-1 mb-1 fw-bold text-center">Hosting</p>
                <p
                    class="fs-6 text-center"
                >Dịch vụ Hosting Linux cPanel được vận vận hành trên hệ thống BKCloud của BKNS với cấu hình mạnh mẽ, đảm bảo tính ổn định và tốc độ cao, giá cả hợp lý phù hợp với nhiều đối tượng.</p>
            </div>
        </div>

        <ServiceListComponent :serviceName="'web_hosting'" @select="selectService"></ServiceListComponent>

        <TypeListComponent
            v-if="typeList.length > 0"
            :typeList="typeList"
            :key="key1"
            @select="selectType"
        ></TypeListComponent>

        <DataListComponent
            v-if="dataList.length > 0"
            :dataList="dataList"
            @select="selectData"
            :key="key2"
        ></DataListComponent>

        <ProductListComponent v-if="productList.length > 0" :productList="productList" :key="key3"></ProductListComponent>

        <RegisterComponent></RegisterComponent>

        <FeatureComponent>ya</FeatureComponent>

        <DescriptionComponent></DescriptionComponent>
    </div>
</template>



<script lang="ts" setup>
import ServiceListComponent from '@/components/ServiceList.vue'
import TypeListComponent from '@/components/TypeList.vue'
import DataListComponent from '@/components/DataList.vue'
import ProductListComponent from '@/components/ProductList.vue'
import RegisterComponent from '@/components/Register.vue'
import BreadcrumbComponent from '@/components/Breadcrumb.vue'
import FeatureComponent from './component/Feature.vue'
import DescriptionComponent from './component/Description.vue'
import ProductDefine from '@/core/file-Json/product-define.json'
import { onMounted, ref } from 'vue';
import { ArrowRight, DArrowRight } from '@element-plus/icons-vue'
import Swal from 'sweetalert2'

interface IServiceList {
    name: string ;
    id: number;
    type_list: Array<ITypeList>;
    data_list: Array<IDataList>;
    product_list: Array<IProductList>;
}
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
    id: number;
    price_total: number;
    infomation: Array<IInfomation>;
}
interface IInitProductList {
    price_per_month: number;
    price_total: number;
}
interface IDataList {
    data_name: string | null;
    discount: number;
    id: number;
}
interface IInfomation {
    title: string
}


onMounted(async () => {
    serviceList.value = service.web_hosting
    await selectService(serviceList.value[0].type_list[0])
    setTimeout(() => {
        selectType(serviceList.value[0].type_list[0].product_list[0])
        selectData(serviceList.value[0].type_list[0].data_list[0])
    }, 1100)
    breadcrumbList.value[breadcrumbList.value.length - 1].name = serviceList.value[0].name
    // console.log(serviceList.value, 'sssssssssss')
})

// create value
const service = JSON.parse(JSON.stringify(ProductDefine));
const serviceList = ref<Array<IServiceList>>([])
const serviceId = ref(-1)
const typeId = ref(-1)
const typeList = ref<Array<ITypeList>>([])
const dataList = ref<Array<IDataList>>([])
const productList = ref<Array<IProductList>>([])
const initProductList = ref<Array<IInitProductList>>([])
const percentDiscount = ref(0)
const key1 = ref(0);
const key2 = ref(0);
const key3 = ref(0);
const breadcrumbList = ref<any>([
    { path: "/", name: 'Trang chủ' },
    { path: "/web-hosting", name: 'Host - Hosting - Web Hosting' },
    { path: "", name: '' },
])


// create funtion
const selectService = async (service) => {
    for (let k = 0; k < productList.value.length; k++) {
        let product = initProductList.value
        productList.value[k].price_per_month = product[k].price_per_month
        productList.value[k].price_total = product[k].price_total
    }
    serviceId.value = service.id
    Swal.fire({
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading()
        },
    })
    await setTimeout(() => {
        typeList.value = []
        productList.value = []
        for (let i = 0; i < serviceList.value.length; i++) {
            if (serviceList.value[i].id == service.id) {
    breadcrumbList.value[breadcrumbList.value.length - 1].name = serviceList.value[i].name

                if (serviceList.value[i].type_list) {
                    typeList.value = serviceList.value[i].type_list
                    dataList.value = typeList.value[0].data_list
                    selectType(typeList.value[0])
                }
                // else if (serviceList.value[i].data_list && serviceList.value[i].product_list) {
                //     dataList.value = serviceList.value[i].data_list
                //     productList.value = serviceList.value[i].product_list
                //     for (let j = 0; j < serviceList.value[i].product_list.length; j++) {
                //         let product = serviceList.value[i].product_list
                //         initProductList.value.push({ price_per_month: 0, price_total: 0 })
                //         initProductList.value[j].price_per_month = product[j].price_per_month
                //         initProductList.value[j].price_total = product[j].price_total
                //     }
                // }
            }
        }
        // console.log(serviceList.value, '000000000')
        key1.value++
        key2.value++
        key3.value++
        Swal.close()
    }, 1000)
}

const selectType = (type) => {
    for (let k = 0; k < productList.value.length; k++) {
        let product = initProductList.value
        productList.value[k].price_per_month = product[k].price_per_month
        productList.value[k].price_total = product[k].price_total
    }
    productList.value = []
    dataList.value = []
    initProductList.value = []
    typeId.value = type.id
    key2.value++
    for (let i = 0; i < typeList.value.length; i++) {
        if (typeList.value[i].id == type.id) {
            if (serviceList.value[i].type_list) {
                dataList.value = typeList.value[i].data_list
                productList.value = typeList.value[i].product_list
                for (let j = 0; j < typeList.value[i].product_list.length; j++) {
                    let product = typeList.value[i].product_list
                    initProductList.value.push({ price_per_month: 0, price_total: 0 })
                    initProductList.value[j].price_per_month = product[j].price_per_month
                    initProductList.value[j].price_total = product[j].price_total
                }
            }
            selectData(serviceList.value[0].type_list[i].data_list[0])
        }
    }
    key3.value++
}

const selectData = (data) => {
    for (let k = 0; k < productList.value.length; k++) {
        let product = initProductList.value
        productList.value[k].price_per_month = product[k].price_per_month
        productList.value[k].price_total = product[k].price_total
    }
    for (let i = 0; i < dataList.value.length; i++) {
        if (dataList.value[i].id == data.id) {
            percentDiscount.value = dataList.value[i].discount
        }
    }
    for (let j = 0; j < productList.value.length; j++) {
        productList.value[j].price_per_month = productList.value[j].price_per_month * (100 - percentDiscount.value) * 0.01
        productList.value[j].price_total = productList.value[j].price_total * (100 - percentDiscount.value) * 0.01
        productList.value[j].price_total = Math.ceil(productList.value[j].price_total / 1000) * 1000
    }
}
</script>

<style lang="scss">
.product-panner {
    height: 300px;
    background-color: #f1f4fe;
    .fs-6 {
        width: 80%;
    }
    @media (max-width: 576px) {
        height: 550px;
    }
}
.swal2-popup {
    background-color: transparent !important;
    .swal2-loader {
        // border-color: #0DD4D4;
        border-width: 0.3rem;
    }
}
</style>