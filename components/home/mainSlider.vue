<template>
  <Carousel
    dir="rtl"
    v-model="currentSlide"
    wrapAround
    autoplay= "2000"
    :itemsToShow="1"
    pauseAutoplayOnHover
    v-if="isShow"
    class="main__slider"
    :navigation="{
      enabled: true,
    }"
    :pagination="{
      enabled: true,
      clickable: true,
      dynamicBullets: true,
    }"
  >
    <Slide
      class="swiper-slide main-swiper-slide"
      v-for="(item, index) in data"
      :key="index"
    >
      <a class="carousel__item" :href="item.link">
        <img :src="GetSliderImage(item.imageName)" :alt="item.title" />
      </a>
    </Slide>
    <template #addons="{ slidesCount }">
      <div class="slider__navigation">
        <div
          class="swiper-button-prev"
          v-if="slidesCount > currentSlide + 1"
          @click="currentSlide += 1"
        ></div>
        <div
          v-if="currentSlide > 0"
          class="swiper-button-next"
          @click="currentSlide = -1"
        ></div>
        <div class="slider__pagination">
          <label
                        :class="{ active: item == currentSlide + 1 }"
                        v-for="item in slidesCount"
                        :key="item"
                        @click="currentSlide = item - 1"
                      ></label>
        </div>
      </div>
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
import { SliderDto } from "~~/models/home/homeDataDto";
import { GetSliderImage } from "~~/utilities/imageUrls";
const props = defineProps<{
  data: SliderDto[];
}>();
const currentSlide = ref(0);
const isShow= ref(false);

onMounted(()=>{
  setTimeout(()=>{
    isShow.value=true;
  },100);
});
</script>

<style>
@media screen and (max-width: 990px) {
  .main__slider .carousel__item img {
    height: auto !important;
  }
}

.carousel__item {
  border-radius: 15px;
  width: 100%;
}

.carousel__item img {
  height: 455px;
  border-radius: 15px;
  width: 100%;
}

.carousel__slide {
  padding: 0;
  border-radius: 15px !important;
}

.main__slider .swiper-button-prev::after,
.main__slider .swiper-button-next:after {
  color: white !important;
  font-size: 24px !important;
  font-weight: bold !important;
}

.swiper-button-prev,
.swiper-button-next {
  width: 55px !important;
  height: 55px !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

.slider__pagination {
  display: flex;
  gap: 0.5rem;
  position: absolute;
  bottom: 1rem;
  width: 100%;
  right: 0;
  justify-content: center;
}

.slider__pagination label {
  width: 6px;
  height: 6px;
  background: rgba(0, 0, 0, 0.712);
  border-radius: 50%;
  cursor: pointer;
}

.swiper-pagination-bullet-active-main {
  background: white !important;
}
</style>
