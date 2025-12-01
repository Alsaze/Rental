<template>
  <!--  Mobile -->
  <div v-if="isMobile" class="post-page">
    <Gallery :preview-image="cart?.previewImage" :images="cart?.images" />
  </div>

  <!--  Desktop -->
  <UContainer v-else>
    <div class="post-page">
      <h1>{{ cart?.title }}</h1>

      <Gallery :preview-image="cart?.previewImage" :images="cart?.images" />

      <div>
        Описание
        <p>{{ cart?.description }}</p>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import Gallery from '~/components/Gallery.vue'

const isMobile = useMediaQuery('(max-width: 1024px)')
const route = useRoute()

const { cartById } = useMock()
const cart = cartById(route.params.id)

definePageMeta({
  layout: 'cart',
})
</script>

<style lang="scss">
.post-page {
  margin-top: calc(64px + 26px);
  display: flex;
  flex-direction: column;
  gap: 16px;

  @include mobile {
    margin-top: 0;
    overflow: hidden;
  }
}
</style>
