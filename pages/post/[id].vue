<template>
  <!--  Mobile -->
  <div v-if="isMobile" ref="target" class="post-page">
    <Gallery :preview-image="cart?.previewImage" :images="cart?.images" />

    <div class="post-page__info">
      {{ cart?.title }}

      <UButton label="Подробности" size="xl" class="flex justify-center text-center" @click="open = !open" />
    </div>

    <UDrawer
      v-if="isMobile"
      v-model:open="open"
      class="post-page__drawer"
      fixed
      :ui="{
        content: 'fixed bg-default ring ring-default flex focus:outline-none overflow-hidden',
        container: 'w-full flex flex-col gap-4 p-4 overflow-hidden',
        body: 'flex-1 overflow-y-auto',
      }"
    >
      <template #content>
        <div ref="targetDrawer" class="post-page__drawer-content">
          <p>{{ cart?.title }}</p>
          <div>
            <p>Описание:</p>
            <p>{{ cart?.description }}</p>
          </div>

          <MapView v-if="cart?.coordinates" :marker="marker" />

          <Contacts />
        </div>
      </template>
    </UDrawer>
  </div>

  <!--  Desktop -->
  <UContainer v-else>
    <div class="post-page">
      <h1>{{ cart?.title }}</h1>

      <Gallery :preview-image="cart?.previewImage" :images="cart?.images" />

      <div>
        Описание:
        <p>{{ cart?.description }}</p>
      </div>

      <MapView v-if="cart?.coordinates" :marker="marker" />

      <Contacts />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import type { UseSwipeDirection } from '@vueuse/core'
import { useMediaQuery, useScroll, useSwipe } from '@vueuse/core'
import { computed, shallowRef } from 'vue'
import Gallery from '~/components/Gallery.vue'

const open = ref(false)
const target = shallowRef<HTMLElement | null>(null)
const targetHeight = computed(() => target.value?.offsetHeight)
const targetDrawer = shallowRef<HTMLElement | null>(null)
const targetDrawerHeight = computed(() => targetDrawer.value?.offsetHeight)
const { y } = useScroll(targetDrawer)
const isMobile = useMediaQuery('(max-width: 1024px)')
const route = useRoute()

const { cartById } = useMock()
const cart = cartById(route.params.id)
const marker = computed(() => ({
  coordinates: cart?.coordinates ?? [0, 0],
  subtitle: cart?.address,
}))

const { lengthY } = useSwipe(
  target,
  {
    passive: false,
    onSwipeEnd(e: TouchEvent, direction: UseSwipeDirection) {
      if (lengthY.value > 0 && targetHeight.value && (Math.abs(lengthY.value) / targetHeight.value) >= 0.1) {
        open.value = true
      }
    },
  },
)

const { lengthY: drawerLengthY } = useSwipe(
  targetDrawer,
  {
    passive: false,
    onSwipeEnd(e: TouchEvent, direction: UseSwipeDirection) {
      if (drawerLengthY.value < 0 && y.value === 0 && targetDrawerHeight.value && (Math.abs(drawerLengthY.value) / targetDrawerHeight.value) >= 0.2) {
        open.value = false
      }
    },
  },
)

definePageMeta({
  layout: 'cart',
})

onMounted(() => {
  if (isMobile.value) {
    document.body.style.overflow = 'hidden'
  }
})

onUnmounted(() => {
  if (isMobile.value) {
    document.body.style.overflow = ''
  }
})
</script>

<style lang="scss">
.post-page {
  position: relative;
  margin-top: calc(64px + 26px);
  display: flex;
  flex-direction: column;
  gap: 16px;

  @include mobile {
    margin-top: 0;
    overflow: hidden;
  }

  &__info {
    background: var(--ui-bg);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;

    position: absolute;
    padding-inline: 10px;
    height: 150px;
    bottom: 0;
    width: 100%;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    text-align: center;
  }

  &__drawer {
    &-content {
      overflow-y: auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
}
</style>
