<template>
  <UContainer>
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
import Gallery from '~/pages/post/Gallery.vue'

const route = useRoute()

const { cartById } = useMock()
const cart = cartById(route.params.id)
</script>

<style lang="scss">
.post-page {
  margin-top: calc(64px + 26px);
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
