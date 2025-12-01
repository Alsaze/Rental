<template>
  <div id="variations">
    <UCarousel
      v-slot="{ item }"
      arrows
      :items="previewItems"
      :ui="{ item: 'basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6' }"
      class="w-full variant"
    >
      <NuxtLink :to="`/post/${item.id}`">
        <img
          :src="item?.previewImage?.src"
          :alt="item?.previewImage?.src"
          class="rounded-lg w-full h-auto object-cover"
        >
      </NuxtLink>
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

<style lang="scss">
.variant {
  cursor: pointer;
}
</style>
