<template>
  <div class="ui-box mb-5">
    <div class="ui-box-title">دسته بندی محصولات</div>
    <div class="ui-box-content">
      <div class="categories-container">
        <!-- Slider main container -->
        <div class="swiper category-swiper-slider pb-5">
          <Carousel
            dir="rtl"
            v-model="currentSlide"
            :itemsToShow="4"
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
              v-for="item in utilStore.categories"
            >
              <div class="category-item">
                <nuxt-link to="/">
                  <img
                    :src="GetCategoryImage(item.imageName)"
                    class="category-img"
                    :alt="item.title"
                  />
                  <span class="category-title"> {{ item.title }}  </span>
                </nuxt-link>
              </div>
            </Slide>
            <template #addons="{ slidesCount }" v-if="slidesCount > 4">
              <div class="slider__navigation">
                <div
                  v-if="currentSlide >= slidesCount - 2"
                  class="swiper-button-prev disabled"
                ></div>
                <div
                  v-else
                  class="swiper-button-prev"
                  @click="currentSlide += 1"
                ></div>
                <div
                  v-if="currentSlide <= 1"
                  class="swiper-button-next disabled"
                ></div>
                <div
                  v-else
                  :class="[
                    'swiper-button-next',
                    { disabled: currentSlide <= 1 },
                  ]"
                  @click="currentSlide -= 1"
                ></div>
                <div class="slider__pagination" v-if="slides > 1">
                  <label
                    v-for="item in slides"
                    :class="{ active: item == activeSlide }"
                    :key="item"
                    @click="changeSlide(item)"
                  ></label>
                </div>
              </div>
            </template>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";
import { useUtilStore } from "~/stores/utilStore";
import { GetCategoryImage} from "../../utilities/imageUrls";

const utilStore = useUtilStore();

const currentSlide = ref(1);
const isShow = ref(false);
const slides = Number((utilStore.categories.length / 7).toFixed());
const activeSlide = ref(1);

onMounted(() => {
  setTimeout(() => {
    isShow.value = true;
  }, 100);
});
const changeSlide = (slide: number) => {
  if (slide == 1) {
    currentSlide.value = 1;
    return;
  }
  currentSlide.value = slide * 4;
};
watch(currentSlide, (val) => {
  if (val == 1) {
    activeSlide.value = 1;
    return;
  }
  activeSlide.value = Math.ceil(val / 4);
});
</script>

<style scoped>
.category-item{
    width: 100%;
}
.carousel__slide {
    padding: 0;
  padding-left: 10px;
}
.swiper-button-prev::after,
.swiper-button-next:after {
  color: black !important;
  font-size: 24px !important;
  font-weight: bold !important;
}

.swiper-button-prev.disabled,
.swiper-button-next.disabled {
  opacity: 0.5 !important;
}

.swiper-button-prev,
.swiper-button-next {
  width: 55px !important;
  height: 55px !important;
  background: #ffff !important;
  border: 1px solid #efefef !important;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 30px rgb(0 0 0 / 8%);
  box-shadow: 0 0 30px rgb (0 0 0 / 8%) !important;
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
