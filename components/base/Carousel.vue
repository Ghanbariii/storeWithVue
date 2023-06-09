<template>
  <Carousel
    dir="rtl"
    :itemsToShow="itemsToShow"
    :breakpoints="breakpoints"
    v-model="currentSlide"
  >
    <Slide :class="slideClass" v-for="(item, index) in items" :key="index">
      <slot name="item" :item="item" :index="index" />
    </Slide>
    <template #addons="{ slidesCount }">
      <div class="slider__navigation" v-if="slidesCount > 7">
        <div
          v-if="currentSlide >= slideCount - itemToShow"
          class="swiper-button-next disabled"
        ></div>
        <div v-else class="swiper-button-next" @click="nextSlide"></div>
        <div v-if="currentSlide <= 1" class="swiper-button-next disabled"></div>
        <div v-else class="swiper-button-prev" @click="prevSlide"></div>
      </div>
      <div class="slider__pagination" v-if="slides > 1">
        <label
          v-for="item in slides"
          :class="{ active: item == activeSlide }"
          :key="item"
          @click="changeSlide(item)"
        ></label>
      </div>
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";
const {
  items,
  breakpoints = {},
  slideClass = "",
  itemsToShow = 1,
} = defineProps<{
  items: any[];
  breakpoints?: Object;
  itemsToShow?: Number;
  slideClass?: String;
}>();
const itemToShow = ref(itemsToShow);
const currentSlide = ref(1);
const isShow = ref(false);
const slides = computed(() =>
  Math.ceil(Number(items.length / itemToShow.value))
);
const activeSlide = ref(1);

onMounted(() => {
  setTimeout(() => {
    isShow.value = true;
  }, 500);
  onResize();
  if (window.innerWidth <= 500) {
    currentSlide.value = 0;
  }
  window.addEventListener("resize", onResize);
});
onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});

const nextSlide = () => {
  currentSlide.value += 2;
};
const prevSlide = () => {
  currentSlide.value -= 2;
};
const changeSlide = (slide: number) => {
  if (slide == 1) {
    currentSlide.value = 1;
    return;
  }
  var res = slide * itemToShow.value;
  if (res > items.length) res = items.length - 1;

  currentSlide.value = res;
};
watch(currentSlide, (val) => {
  if (val == 1) {
    activeSlide.value = 1;
    return;
  }
  activeSlide.value = Math.ceil(val / itemToShow.value);
});
const onResize = () => {
  getItemShow();
};
function getItemShow(): void {
  const breakpointsArray: number[] = Object.keys(breakpoints)
    .map((key: string): number => Number(key))
    .sort((a: number, b: number) => +b - +a);
  let itemToShop = {};

  breakpointsArray.some((breakpoint): boolean => {
    const isMatched = window.matchMedia(`(min-width: ${breakpoint}px)`).matches;
    if (isMatched) {
      itemToShop = {
        ...breakpoints[breakpoint],
      };
      return true;
    }
    return false;
  });
  itemToShow.value = itemToShop["itemsToShow"];
}
</script>

<style scoped>
.carousel__slide{
    padding: 0;
    padding-left: 10px;
}
.swiper-button-prev::after,
.swiper-button-next::after{
    color: black;
    font-size: 24px;
    font-weight: bold;
}
.swiper-button-prev.disabled,
.swiper-button-next.disabled{
    opacity:.5;
}
.swiper-button-next,
.swiper-button-prev{
    width: 55px;
    height: 55px;
    background-color: #fff;
    border:1px solid #efefef;
    border-radius: 50%;
    -webkit-box-shadow: 0 0 30px rgb(0 0 0 /8%);
    box-shadow: 0 0 30px rgb(0 0 0 /8%);
}
.swiper-button-next {
  right: 1.5rem !important;
  left: unset;
}
.swiper-button-prev {
  left: 1.5rem !important;
  right: unset;
}
.slider__pagination {
  display: flex;
  gap: 0.5rem;
  position: absolute;
  bottom: -1rem;
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
.slider__pagination label.active {
  background: rgb(255, 255, 255);
  width: 8px !important;
  height: 8px !important;
}
</style>
