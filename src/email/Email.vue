<template>
    <div class="web-hosting">
        <div class="product-panner">
            <div class="container h-100 d-flex flex-column flex-center">
                <p class="fs-4 mb-1 fw-bold text-center" @click="key1++">Email</p>
                <p
                    class="fs-2 mb-1 fw-bold text-center"
                >Bảng Giá Email Hosting - Địa chỉ Thuê Email Hosting tốt nhất</p>
                <p
                    class="fs-6 text-center"
                >Email hosting Server là 1 dịch vụ thư điện tử chạy trên máy chủ riêng biệt mà tính bảo mật cao. Ngoài ra, email hosting cho phép bạn điều chỉnh số lượng tài khoản và cấu hình. Thông thường các doanh nghiệp và tổ chức sẽ sử dụng dịch vụ này để tăng tỉ lệ gửi email thành công và độ tin cậy.</p>
            </div>
        </div>

        <ServiceListComponent :serviceName="'email'" @select="selectService"></ServiceListComponent>

        <!-- <TypeListComponent
            v-if="typeList.length > 0"
            :typeList="typeList"
            :key="key1"
            @select="selectType"
        ></TypeListComponent>-->

        <DataListComponent
            v-if="dataList.length > 0"
            :dataList="dataList"
            @select="selectData"
            :key="key2"
        ></DataListComponent>

        <ProductListComponent v-if="productList.length > 0" :productList="productList" :key="key3"></ProductListComponent>

        <SpecificationComponent :serviceId="serviceId" :key="key4"></SpecificationComponent>

        <!-- <div class="specifications mb-5"  v-for="item in tableData" :key="item.id" >
            <div  v-if="item.id == serviceId" class="container d-flex flex-column align-items-center">
                <p class="fs-4 fw-bold text-center my-2">Thông số kỹ thuật</p>
                <div class="specifications-table w-100 d-flex justify-content-center" >
                    <el-table class="w-75" :data="item.children" :border="true">
                        <el-table-column prop="date" label="name" />
                        <el-table-column prop="name" label="description" align="right" />
                    </el-table>
                </div>
            </div>
        </div>-->

        <RegisterComponent></RegisterComponent>

        <DescriptionComponent></DescriptionComponent>
    </div>
</template>



<script lang="ts" setup>
import ServiceListComponent from '@/components/ServiceList.vue'
import DataListComponent from '@/components/DataList.vue'
import ProductListComponent from '@/components/ProductList.vue'
import RegisterComponent from '@/components/Register.vue'
import SpecificationComponent from '@/components/Specification.vue'
import DescriptionComponent from './component/Description.vue'
import ProductDefine from '@/core/file-Json/product-define.json'
import { onMounted, ref, defineComponent } from 'vue';
import Swal from 'sweetalert2'


interface IServiceList {
    name: string | null;
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
    serviceList.value = service.email
    await selectService(serviceList.value[0].type_list[0])
    setTimeout(() => {
        selectType(serviceList.value[0].type_list[0].product_list[0])
        selectData(serviceList.value[0].type_list[0].data_list[0])
    }, 1100)
    // key1.value++


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
const key4 = ref(0);
// const tableData = [
//     {
//         id: 0, children: [
//             {
//                 date: 'Dung lượng lưu trữ 01 Email',
//                 name: '05 GB',
//             },
//             {
//                 date: 'Tên miền',
//                 name: '01',
//             },
//         ]
//     },
//        {
//         id: 2, children: [
//             {
//                 date: 'Địa chỉ Email: Unlimited	',
//                 name: 'Email forwarder: Unlimited',
//             },
//             {
//                 date: 'Mail list: Unlimited',
//                 name: 'Dedicated IP: 01',
//             },
//         ]
//     }

// ]


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
                if (serviceList.value[i].type_list) {
                    typeList.value = serviceList.value[i].type_list
                    dataList.value = typeList.value[0].data_list
                    selectType(typeList.value[0])
                }
                else if (serviceList.value[i].data_list && serviceList.value[i].product_list) {
                    dataList.value = serviceList.value[i].data_list
                    productList.value = serviceList.value[i].product_list
                    for (let j = 0; j < serviceList.value[i].product_list.length; j++) {
                        let product = serviceList.value[i].product_list
                        initProductList.value.push({ price_per_month: 0, price_total: 0 })
                        initProductList.value[j].price_per_month = product[j].price_per_month
                        initProductList.value[j].price_total = product[j].price_total
                    }
                }
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