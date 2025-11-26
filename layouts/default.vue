<template>
  <div class="layout">
    <UHeader
      title="Rental"
      :toggle="false"
      :ui="{ left: 'justify-between w-full', container: 'gap-0', right: 'hidden' }"
    >
      <template #left>
        <NuxtLink to="/">
          Rental
        </NuxtLink>
        <UTabs v-model="activeTab" :content="false" :items="tabs" />
        <UColorModeButton />
      </template>
    </UHeader>

    <UMain>
      <UContainer>
        <slot />
      </UContainer>
    </UMain>

    <UFooter>
      <div class="flex flex-col md:flex-row justify-between items-center w-full text-sm opacity-70">
        <div>
          © {{ new Date().getFullYear() }} Rental. Все права защищены.
        </div>
      </div>
    </UFooter>
  </div>
</template>

<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import useScreen from '~/composables/useScreen'

const { isMobile } = useScreen()

const router = useRouter()
const route = useRoute()

const tabs = ref<TabsItem[]>([
  {
    label: isMobile.value ? '' : 'Главная',
    icon: 'i-lucide-home',
    value: 'index',
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

const activeTab = ref(route.path.split('/')[1])

watch(() => activeTab.value, () => {
  const tab = tabs.value.find(tab => tab.value === activeTab.value)
  router.push(tab.route)
})
</script>
