<template>
  <!--  Mobile -->
  <div v-if="isMobile" class="gallery-mobile">
    <Swiper
      :pagination="true"
      :loop="true"
      :modules="modules"
      class="mySwiper gallery-mobile__swiper"
      @double-click="openAllImages = true"
    >
      <SwiperSlide
        v-for="image in smallImages"
        :key="image?.src"
      >
        <img width="100%" :src="image?.src" :alt="image?.src">
      </SwiperSlide>
    </Swiper>
  </div>

  <!--  Desktop -->
  <div v-else class="gallery-desktop">
    <div class="gallery-desktop__main">
      <img
        :src="previewImage?.src"
        :alt="previewImage?.src"
        @click="openAllImages = true"
      >
    </div>

    <div class="gallery-desktop__side">
      <div
        v-for="img in smallImages"
        :key="img?.src"
        class="gallery-desktop__small"
        @click="openAllImages = true"
      >
        <img :src="img?.src" :alt="img?.src">
      </div>

      <UButton
        size="xl"
        class="gallery-desktop__button"
        @click="openAllImages = true"
      >
        ⋮⋮ Показать все фото
      </UButton>
    </div>
  </div>

  <!--  Mobile Desktop -->
  <UModal v-model:open="openAllImages" fullscreen title="Просмотр всей галереи">
    <template #body>
      <div class="gallery-modal">
        <div
          v-for="img in images"
          :key="img?.src"
        >
          <img class="w-full object-cover" :src="img?.src" :alt="img?.src">
        </div>
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

const props = defineProps<{
  previewImage: { src: string }
  images: { src: string }[]
}>()

const modules = [Pagination]
const openAllImages = ref(false)

const isMobile = useMediaQuery('(max-width: 1024px)')
const smallImages = computed(() => props?.images?.slice(1, 5))
</script>

<style lang="scss">
//Desktop
.gallery-desktop {
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;

  &__main img {
    width: 100%;
    height: 500px;
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
    gap: 10px;
  }

  &__small img {
    width: 100%;
    height: 245px;
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

.gallery-modal {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;

  @include mobile {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
