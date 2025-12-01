<template>
  <div id="variations">
    <UCarousel
      v-slot="{ item }"
      arrows
      :items="items"
      :ui="{ item: 'basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6' }"
      class="w-full variant"
    >
      <img
        :src="item.img"
        alt="item.img"
        class="rounded-lg w-full h-auto object-cover"
      >
    </UCarousel>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    id: 1,
    img: 'https://picsum.photos/468/468?random=1',
  },
  {
    id: 2,
    img: 'https://picsum.photos/468/468?random=2',
  },
  {
    id: 3,
    img: 'https://picsum.photos/468/468?random=3',
  },
]
</script>

<style lang="scss">
.variant {
  cursor: pointer;
}
</style>
