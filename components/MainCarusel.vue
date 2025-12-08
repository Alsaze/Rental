<template>
  <div id="variations" class="main-carousel">
    <h2>{{ title }}</h2>

    <Swiper
      :modules="[Navigation, Autoplay]"
      :loop="true"
      :autoplay="{ delay: 2000 }"
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
      <SwiperSlide
        v-for="slide in mixedSlides"
        :key="slide.id"
        class="main-carousel__variant"
      >
        <template v-if="!slide.isText">
          <NuxtLink :to="`/post/${slide.id}`">
            <img :src="slide.previewImage.src" :alt="slide.shortTitle">
            <div class="main-carousel__type text-sm">
              {{ $t(slide.type) }}
            </div>
            <p class="text-sm">
              {{ slide.shortTitle }}
            </p>
          </NuxtLink>
        </template>

        <template v-else>
          <NuxtLink
            href="#contacts"
            class="main-carousel__text-slide"
          >
            {{ slide.text }}
          </NuxtLink>
        </template>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { computed } from 'vue'
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

const props = defineProps<{ title?: 'Актуальные варианты', previewItems: PreviewItem[] }>()

const mixedSlides = computed(() => {
  const result: Array<
      PreviewItem | { isText: true, text: string }
  > = []

  props.previewItems.forEach((item, index) => {
    result.push(item)

    const count = index + 1

    if (count % 6 === 0) {
      result.push({
        isText: true,
        text: 'Хочешь больше вариантов?',
      })
      return
    }

    if (count % 3 === 0) {
      result.push({
        isText: true,
        text: 'Не нашёл подходящий вариант?',
      })
    }
  })

  return result
})
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

  &__text-slide {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: #334155;
    color: white;
    padding: 16px;
    text-align: center;
    font-size: 18px;
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
