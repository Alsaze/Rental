<template>
  <div v-if="isMobile" class="gallery-mobile">
    <Swiper
      :pagination="true"
      :loop="true"
      :modules="modules"
      class="mySwiper gallery-mobile__swiper"
    >
      <SwiperSlide
        v-for="image in smallImages"
        :key="image?.src"
      >
        <img width="100%" :src="image?.src" :alt="image?.src">
      </SwiperSlide>
    </Swiper>
  </div>

  <div v-else class="gallery-desktop">
    <div class="gallery-desktop__main">
      <img :src="previewImage?.src" :alt="previewImage?.src">
    </div>

    <div class="gallery-desktop__side">
      <div
        v-for="img in smallImages"
        :key="img?.src"
        class="gallery-desktop__small"
      >
        <img :src="img?.src" :alt="img?.src">
      </div>

      <UButton size="xl" class="gallery-desktop__button">
        ⋮⋮ Показать все фото
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

const props = defineProps<{ previewImage: { src }, images: { src }[] }>()

const modules = [Pagination]

const isMobile = useMediaQuery('(max-width: 1024px)')
const smallImages = computed(() => props?.images?.slice(1, 5))
</script>

<style lang="scss">
//Desktop
.gallery-desktop {
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 12px;

  &__main img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    cursor: pointer;
    transition: ease-in 0.1s;

    &:hover {
      opacity: 0.7;
    }
  }

  &__side {
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 500px));
    gap: 12px;
  }

  &__small img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    cursor: pointer;
    transition: ease-in 0.1s;

    &:hover {
      opacity: 0.7;
    }
  }

  &__button {
    position: absolute;
    right: 6px;
    bottom: 6px;
    cursor: pointer;
  }
}
</style>
