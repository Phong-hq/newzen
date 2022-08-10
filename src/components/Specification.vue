<template>
    <div class="specifications mb-5" v-for="item in tableData" :key="item.id">
        <div v-if="serviceId == item.id" class="container d-flex flex-column align-items-center">
            <p class="fs-4 fw-bold text-center my-2">Thông số kỹ thuật</p>
            <div class="specifications-table w-100 d-flex justify-content-center">
                <el-table class="w-75" :data="item.children" :border="true">
                    <el-table-column prop="date" label="name" />
                    <el-table-column prop="name" label="description" align="right" />
                </el-table>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
    serviceId: {
        type: Number || null,
        required: true,
    }
});

const tableData = ref([
    {
        id: 0, children: [
            {
                date: 'Dung lượng lưu trữ 01 Email',
                name: '05 GB',
            },
            {
                date: 'Tên miền',
                name: '01',
            },
        ]
    },
    {
        id: 2, children: [
            {
                date: 'Địa chỉ Email: Unlimited	',
                name: 'Email forwarder: Unlimited',
            },
            {
                date: 'Mail list: Unlimited',
                name: 'Dedicated IP: 01',
            },
        ]
    }

])
</script>


<style lang="scss" scoped>
.specifications-table {
    &::v-deep {
        width: 100% !important;
        .el-table__header-wrapper {
            display: none;
        }
        .el-table--fit {
            border-radius: 10px;
            border: solid 1px #e5e5e5;
            box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.15);
            background-color: #fff;
            margin: 0.25rem;
        }
        table {
            width: 100% !important;
            .el-table__row {
                background-color: transparent;
            }
            .cell {
                padding: 0 100px !important;
                color: #2f2f2f;
                @media (max-width: 768px) {
                    padding: 0 1rem !important;
                }
            }
            .el-table_1_column_2 {
                border-right: none !important;
            }
            .el-table_1_column_1 {
                border-left: none !important;
            }
            tr:last-child {
                td {
                    border-bottom: none;
                }
            }
        }
        .el-table--border {
            &::after,
            &::before {
                content: "";
                display: none;
            }
            .el-table__inner-wrapper {
                &::after,
                &::before {
                    content: "";
                    display: none;
                }
            }
        }
        .el-table__border-left-patch {
            display: none;
        }
        @media (max-width: 992px) {
            .el-table--fit {
                width: 100% !important;
            }
        }
    }
}
</style>