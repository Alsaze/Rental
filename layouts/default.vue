<template>
  <div class="layout">
    <UHeader
      title="Rental"
      :toggle="false"
      :ui="{
        root: 'fixed bg-transparent w-full',
        left: 'relative flex items-center w-full',
        container: 'gap-0',
        right: 'hidden',
      }"
    >
      <template #left>
        <div class="text-lg">
          Rental
        </div>

        <div class="absolute left-1/2 transform -translate-x-1/2">
          <UTabs v-model="activeTab" :size="isMobile ? 'md' : 'xl'" :content="false" :items="tabs" />
        </div>

        <div class="ml-auto">
          <UButton href="#contacts" :size="isMobile ? 'md' : 'xl'" label="Связаться" />
        </div>
      </template>
    </UHeader>

    <UMain>
      <slot />
    </UMain>

    <UFooter>
      <div class="flex flex-col md:flex-row items-center text-sm opacity-70">
        <div>
          © {{ new Date().getFullYear() }} Rental. Все права защищены.
        </div>
      </div>
    </UFooter>
  </div>
</template>

<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import { useMediaQuery } from '@vueuse/core'

const isMobile = useMediaQuery('(max-width: 1280px)')

const router = useRouter()
const route = useRoute()

const tabs = computed<TabsItem[]>(() => [
  {
    label: isMobile.value ? '' : 'Главная',
    icon: 'i-lucide-home',
    value: '/',
    route: '/',
  },
  {
    label: isMobile.value ? '' : 'Недвижимость',
    icon: 'i-lucide-building-2',
    value: 'nedvizhimost',
    route: '/nedvizhimost',
  },
  {
    label: isMobile.value ? '' : 'Авто',
    icon: 'i-lucide-car',
    value: 'transport',
    route: '/transport',
  },
])

const activeTab = ref(route.path.split('/')[1] || '/')

watch(() => activeTab.value, () => {
  const tab = tabs.value.find(tab => tab.value === activeTab.value)
  router.push(tab.route)
})

watch(() => route.path, () => {
  const routerPath = route.path.split('/')[1]

  if (routerPath === activeTab.value) {
    return
  }

  activeTab.value = routerPath
})
</script>
