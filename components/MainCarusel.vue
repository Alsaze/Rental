<template>
  <div id="variations" class="main-carousel">
    <h2>Актуальные варианты</h2>

    <!--    :autoplay="{ delay: 2000 }" -->

    <Swiper
      :modules="[Navigation, Autoplay]"
      :loop="true"
      :navigation="true"
      :slides-per-view="1.2"
      :space-between="16"
      :breakpoints="{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
      }"
    >
      <SwiperSlide v-for="item in previewItems" :key="item.id" class="main-carousel__variant">
        <NuxtLink :to="`/post/${item.id}`">
          <img :src="item.previewImage.src" :alt="item.shortTitle">
          <div class="main-carousel__type text-sm ">
            {{ $t(item.type) }}
          </div>
          <p class="text-sm">
            {{ item.shortTitle }}
          </p>
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'

interface PreviewItem {
  id: number
  shortTitle: string
  type: string
  previewImage: {
    src: string
  }
}

defineProps<{ previewItems: PreviewItem[] }>()
</script>

<style scoped lang="scss">
.main-carousel {
  height: 380px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__variant {
    position: relative;
    cursor: pointer;

    img {
      border-radius: 12px;
      height: 300px;
      width: 100%;
      object-fit: cover;
    }
  }

  &__type {
    position: absolute;
    top: 4px;
    left: 4px;
    padding: 4px 6px;
    background: #1e293b;
    border-radius: 8px;
  }
}
</style>
