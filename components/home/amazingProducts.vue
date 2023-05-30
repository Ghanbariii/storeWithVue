<template>
  <div>
    <div
      class="ui-box ui-box-specials pb-3 mb-5"
      style="background-color: #f03426"
    >
      <div class="container">
        <div class="ui-box-title text-white fw-bolder d-sm-none">
          قبل از اتمام جشنواره خرید کن!
        </div>
        <div class="ui-box-content">
          <div class="row">
            <div class="col-lg-3 d-lg-block d-none">
              <div class="specials-container">
                <img
                  src="/images/theme/specials.png"
                  class="img-fluid"
                  alt=""
                />
                <nuxt-link to="/" class="btn btn-sm btn-outline-light"
                  >مشاهده همه <i class="ri-arrow-left-fill ms-2"></i
                ></nuxt-link>
              </div>
            </div>
            <div class="col-lg-9">
              <!-- <div class="swiper product-specials-swiper-slider mb-3 pb-5">
                        <div class="swiper-wrapper">
                          <div class="swiper-slide d-lg-none d-sm-block d-none">
                            <div class="specials-container">
                              <img
                                src="/images/theme/specials.png"
                                class="img-fluid mb-0"
                                alt=""
                              />
                              <nuxt-link to="/" class="btn btn-sm btn-outline-light"
                                >مشاهده همه <i class="ri-arrow-left-fill ms-2"></i
                              ></nuxt-link>
                            </div>
                          </div>
                          <div class="swiper-slide">
                          </div>
                        </div>
                      </div> -->
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
                <Slide class="swiper-slide main-swiper-slide">
                  <ProductCard :product="{} as ProductCardDto" />
                </Slide>
                <Slide class="swiper-slide main-swiper-slide">
                  <ProductCard :product="{} as ProductCardDto" />
                </Slide>
                <Slide class="swiper-slide main-swiper-slide">
                  <ProductCard :product="{} as ProductCardDto" />
                </Slide>
                <Slide class="swiper-slide main-swiper-slide">
                  <ProductCard :product="{} as ProductCardDto" />
                </Slide>
                <Slide class="swiper-slide main-swiper-slide">
                  <ProductCard :product="{} as ProductCardDto" />
                </Slide>
                <Slide class="swiper-slide main-swiper-slide">
                  <ProductCard :product="{} as ProductCardDto" />
                </Slide>

                <template #addons="{ slidesCount }">
                  <div class="slider__navigation">
                    <div
                      class="swiper-button-prev"
                      @click="currentSlide += 1"
                    ></div>
                    <div
                      class="swiper-button-next"
                      @click="currentSlide = -1"
                    ></div>
                  </div>
                  <div
                    class="slider__pagination"
                    v-if="Number((slidesCount / 4).toFixed()) > 1"
                  >
                    <label
                      :class="{ active: item == currentSlide + 1 }"
                      v-for="item in Number((slidesCount / 4).toFixed())"
                      :key="item"
                      @click="currentSlide = item - 1"
                    ></label>
                  </div>
                </template>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";

import { ProductCardDto } from "~/models/ProductCard";

defineProps<{
  products: ProductCardDto[];
}>();

const currentSlide = ref(0);
const isShow = ref(false);

onMounted(() => {
  setTimeout(() => {
    isShow.value = true;
  }, 100);
});
</script>

<style scoped>
.carousel__slide{
  margin: 0 8px;
}
.swiper-button-prev::after,
.swiper-button-next:after {
  color: black !important;
  font-size: 24px !important;
  font-weight: bold !important;
}

.swiper-button-prev.disabled,
.swiper-button-next.disabled {
  opacity: .5 !important;
}

.swiper-button-prev,
.swiper-button-next {
  width: 55px !important;
  height: 55px !important;
  background: #ffff !important;
  border: 1px solid #efefef !important;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 30px rgb(0 0 0 / 8%);
  box-shadow: 0 0 30px rgb (0 0 0 / 8%)!important;
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
  background: black;
  width: 8px !important;
  height: 8px !important;
}
</style>
