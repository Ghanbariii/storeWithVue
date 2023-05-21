<template>
        <Carousel dir="rtl" v-model="currentSlide">
            <Slide class="swiper-slide main-swiper-slide">
                <a class="carousel__item" href="#" style="background-image: url(/images/slider/main/01.jpg);">
                    <img src="/images/slider/main/01.jpg" alt="">
                </a>
            </Slide>
            <Slide class="swiper-slide main-swiper-slide">
                <a class="carousel__item" href="#" style="background-image: url(/images/slider/main/02.jpg);">
                    <img src="/images/slider/main/02.jpg" alt="">
                </a>
            </Slide>
            <Slide class="swiper-slide main-swiper-slide">
                <a class="carousel__item" href="#" style="background-image: url(/images/slider/main/03.jpg);">
                    <img src="/images/slider/main/03.jpg" alt="">
                </a>
            </Slide>
            <Slide class="swiper-slide main-swiper-slide">
                <a class="carousel__item" href="#" style="background-image: url(/images/slider/main/04.jpg);">
                    <img src="/images/slider/main/04.jpg" alt="">
                </a>
            </Slide>
            <template #addons="{ slidesCount }">
                <div class="slider_navigation">
                    <div class="swiper-button-prev" v-if="slidesCount > currentSlide + 1" @click="currentSlide += 1">
                    </div>
                    <div class="swiper-button-next" v-if="currentSlide > 0" @click="currentSlide -= 1"></div>
                </div>
                <div class="slider_pagination">
                    <label :class="{ 'active': item == currentSlide + 1 }" v-for="item in slidesCount" :key="item"
                        @click="currentSlide = item - 1"></label>
                </div>
            </template>
        </Carousel>
</template>

<script setup lang="ts">

import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
const currentSlide = ref(0);
</script>

<style scoped>
.carousel__item img {
    border-radius: 15px !important;
    height: 455px;
    width: 100%;
}

.carousel__item {
    border-radius: 15px !important;
    width: 100%;
}

.carousel__slide {
    padding: 0;
}

.swiper-button-prev::after,
.swiper-button-next::after {
    color: white;
    font-size: 24px;
    font-weight: bold;
}

.swiper-button-prev,
.swiper-button-next {
    width: 55px;
    height: 55px;
    background: transparent;
}

.slider_pagination {
    display: flex;
    gap: 0.5rem;
    position: absolute;
    bottom: 1.5rem;
    width: 100%;
    right: 0;
    justify-content: center
}

.slider_pagination label {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.712);
    cursor: pointer;
}

.slider_pagination label.active {
    background: white !important;
    width: 9px;
    height: 9px;
}
</style>