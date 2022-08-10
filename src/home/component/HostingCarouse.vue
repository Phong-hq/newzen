<template>
    <div class="edit-carousel mt-5">
        <Carousel :settings="settings" :itemsToScroll="1" :breakpoints="breakpoints">
            <Slide v-for="item in hostList" :key="item.id">
                <div class="carousel__item">
                    <p class="fs-4 fw-bold">{{ item.name }}</p>
                    <p class="mb-0 text-red">{{ item.discount }}</p>
                    <p class="text-gray">
                        <span>
                            <del>{{ item.price }}</del>
                        </span>/năm
                    </p>
                </div>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </div>
</template>

<script lang="ts" setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { defineComponent, ref } from 'vue'

defineComponent({
    setup(props, ctx) {
        return { Carousel, Slide, Navigation }
    }
});

// create value
const settings = ref({
    itemsToShow: 3,
    snapAlign: 'center',
})
 const  breakpoints= ref({
      0: {
        itemsToShow: 2,
        snapAlign: 'start',
      },
      576: {
        itemsToShow: 3,
        snapAlign: 'center',
      },
    })
const hostList = ref([
    { id: 1, name: '.asia', discount: '79.000đ', price: '380.000đ' },
    { id: 2, name: '.mobi', discount: '150.000đ', price: '530.000đ' },
    { id: 3, name: '.pro', discount: '150.000đ', price: '380.000đ' },
    { id: 4, name: '.top', discount: '50.000đ', price: '280.000đ' },
    { id: 5, name: '.org', discount: '319.000đ', price: '349.000đ' },
    { id: 6, name: '.xyz', discount: '50.000đ', price: '580.000đ' },
    { id: 7, name: '.site', discount: '50.000đ', price: '620.000đ' },
    { id: 8, name: '.club', discount: '330.000đ', price: '340.000đ' },
    { id: 9, name: '.space', discount: '50.000đ', price: '280.000đ' },
    { id: 10, name: '.info', discount: '99.000đ', price: '385.000đ' }
])
</script>

<style lang="scss">
.edit-carousel {
    width: 500px;
    .carousel__item {
        background-color: #fff;
        width: 90%;
        height: 120px;
        border: solid 1px #e5e5e5;
        border-radius: 8px;
        box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.15);
        .text-red {
            font-weight: 500;
        }
    }
    button {
        background-color: transparent;
        &.carousel__next {
            transform: translate(70%, -50%) scale(1.3);
        }
        &.carousel__prev {
            transform: translate(-70%, -50%) scale(1.3);
        }
        svg {
            fill: #000;
        }
    }
    .carousel__prev--in-active,
    .carousel__next--in-active {
        display: none;
    }
    @media (max-width: 576px) {
        width: 100%;
    }
}
.hosting-select{
    .el-input__inner{
        width: 75px !important;
        height: 30px  !important;
        border: none;
        border-radius: 10px;
        box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.15);
        font-weight: 700;
    }
    .el-icon{
        path {
            fill: #000;
        }
    }
}
</style>
