<template>
  <div class="gallery">
    <div class="gallery__main">
      <img :src="previewImage?.src" :alt="previewImage?.src">
    </div>

    <div class="gallery__side">
      <div
        v-for="img in smallImages"
        :key="img?.src"
        class="gallery__small"
      >
        <img :src="img?.src" :alt="img?.src">
      </div>

      <UButton size="xl" class="gallery__button">
        ⋮⋮ Показать все фото
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ previewImage: { src }, images: { src }[] }>()

const smallImages = computed(() => props?.images?.slice(1, 5))
</script>

<style lang="scss">
.gallery {
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
