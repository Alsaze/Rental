<template>
  <div class="layout">
    <UHeader
      title="Rental"
      :toggle="false"
      :ui="{
        root: 'fixed bg-transparent w-full',
        left: 'relative flex items-center w-full justify-between',
        container: 'gap-0',
        right: 'hidden',
      }"
    >
      <template #left>
        <Icon class="cursor-pointer w-6 h-6" name="lucide:arrow-left" @click="routerBack()" />

        <NuxtLink to="/" class="absolute left-1/2 transform -translate-x-1/2 text-lg flex items-center gap-2">
          <Icon name="my-icon:main-logo" :style="{ fontSize: isMobile ? '34px' : '48px' }" />
          Rental
        </NuxtLink>

        <transition name="fade">
          <UButton
            v-if="showContactBar && !isMobile"
            class="justify-center"
            href="#contacts"
            size="xl"
            label="Свяжитесь с нами"
          />
        </transition>
      </template>
    </UHeader>

    <UMain>
      <slot />
    </UMain>

    <BaseFooter v-if="!isMobile" />
  </div>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import BaseFooter from '~/components/BaseFooter.vue'

const router = useRouter()
const route = useRoute()
const isMobile = useMediaQuery('(max-width: 1280px)')

const { cartById } = useMock()
const cart = cartById(route?.params?.id)
const showContactBar = useState('showContactBar', () => false)

function routerBack() {
  const newRoute = `/${cart?.category}#variations`
  router.push(newRoute)
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.footer {
  @include mobile {
    display: none;
  }
}
</style>
