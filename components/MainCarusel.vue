<template>
  <div id="variations" class="main-carusel">
    <h2>Актуальные варианты</h2>

    <UCarousel
      v-slot="{ item }"
      arrows
      :items="previewItems"
      :ui="{ item: 'basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6' }"
      class="w-full"
    >
      <div class="variants">
        <NuxtLink :to="`/post/${item.id}`">
          <img :src="item?.previewImage?.src" :alt="item?.previewImage?.src">
        </NuxtLink>
      </div>
    </UCarousel>
  </div>
</template>

<script setup lang="ts">
interface PreviewItem {
  id: number
  previewImage: {
    src: string
  }
}

defineProps<{ previewItems: PreviewItem[] }>()
</script>

<style scoped lang="scss">
.main-carusel {
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.variants {
  cursor: pointer;
  height: 100%;

  img {
    border-radius: 12px;
    height: 300px;
    object-fit: cover;
  }
}
</style>
