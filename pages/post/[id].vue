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
            <p class="whitespace-pre-line" v-html="cart?.description" />
          </div>

          <MapView v-if="cart?.coordinates" :marker="marker" />

          <MainCarusel title="Похожие варианты" :preview-items="previewItems" />

          <Contacts />

          <BaseFooter />
        </div>
      </template>
    </UDrawer>
  </div>

  <!--  Desktop -->
  <UContainer v-else>
    <div class="post-page">
      <h1>{{ cart?.title }}</h1>

      <Gallery :preview-image="cart?.previewImage" :images="cart?.images" />

      <div ref="descriptionRef" class="post-page__description">
        <div>
          Описание:
          <p class="whitespace-pre-line" v-html="cart?.description" />
        </div>

        <UCard
          variant="subtle"
          class="post-page__action"
          title="Action"
        >
          <div>
            Хотите узнать больше или оформить бронирование?<br>
            Напишите нам — мы с удовольствием подскажем всё, что нужно.
          </div>

          <template #footer>
            <UButton
              class="w-full flex justify-center"
              href="#contacts"
              size="xl"
              label="Свяжитесь с нами"
            />
          </template>
        </UCard>
      </div>

      <MapView v-if="cart?.coordinates" :marker="marker" />

      <MainCarusel title="Похожие варианты" :preview-items="previewItems" />

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
const descriptionRef = shallowRef<HTMLElement | null>(null)
const target = shallowRef<HTMLElement | null>(null)
const targetHeight = computed(() => target.value?.offsetHeight)
const targetDrawer = shallowRef<HTMLElement | null>(null)
const targetDrawerHeight = computed(() => targetDrawer.value?.offsetHeight)
const { y } = useScroll(targetDrawer)
const isMobile = useMediaQuery('(max-width: 1024px)')
const route = useRoute()
const showContactBar = useState('showContactBar')

const { cartById, cartByCategory } = useMock()
const cart = cartById(route.params.id)
const marker = computed(() => ({
  coordinates: cart?.coordinates ?? [0, 0],
  subtitle: cart?.address,
}))

const previewItems = computed(() => cartByCategory(cart?.category))

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
  const el = descriptionRef.value
  if (!el)
    return

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]

      showContactBar.value = !entry.isIntersecting
    },
    {
      threshold: 0.1,
    },
  )

  observer.observe(el)

  if (isMobile.value) {
    document.body.style.overflow = 'hidden'
  }
})

onUnmounted(() => {
  showContactBar.value = false

  if (isMobile.value) {
    document.body.style.overflow = ''
  }
})

useHead({
  title: `${cart?.title} — подробная информация и услуги от АТ Голден`,
  meta: [
    {
      name: 'description',
      content: `${cart?.title} доступен через АТ Голден. ${cart?.description.replace(/<[^>]+(>|$)/g, '').slice(0, 160)}. Полное сопровождение сделки, юридическая проверка и безопасное оформление.`,
    },
    {
      name: 'keywords',
      content: `${cart?.category}, ${cart?.title}, аренда ${cart?.category}, покупка ${cart?.category}, продажа ${cart?.category}, проверка документов, безопасная сделка, АТ Голден, Кыргызстан, Бишкек, Ош, Джалал-Абад, Каракол, Балыкчы, Талас, Токмак, Узген`,
    },
    {
      property: 'og:title',
      content: `${cart?.title} — подробная информация и услуги от АТ Голден`,
    },
    {
      property: 'og:description',
      content: `${cart?.title} доступен через АТ Голден. ${cart?.description.replace(/<[^>]+(>|$)/g, '').slice(0, 160)}. Полное сопровождение сделки, юридическая проверка и безопасное оформление.`,
    },
  ],
})
</script>

<style lang="scss">
.post-page {
  position: relative;
  margin-top: calc(64px + 26px);
  display: flex;
  flex-direction: column;
  gap: 24px;

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

  &__description {
    flex-shrink: 1;
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;
  }

  &__action {
    height: fit-content;
    flex-shrink: 0;
    position: sticky;
    top: calc(64px + 26px);
    width: 300px;
  }
}
</style>
