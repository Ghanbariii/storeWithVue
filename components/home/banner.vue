<template v-if="filteredBanners.length > 0">
  <div
    class="row mb-3 d-sm-block d-none"
    v-if="position == BannerPosition.بالای_اسلایدر"
  >
    <div class="col-12">
      <div class="banner-img">
        <a :href="filteredBanners[0].link">
          <img src="/images/banner/025.gif" alt="banner"
        /></a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { BannerDto, BannerPosition } from "~~/models/home/homeDataDto";

const props = defineProps<{
  banners: BannerDto[];
  position: BannerPosition;
}>();

const filteredBanners = props.banners.filter((f) => f.position == props.position);
</script>
