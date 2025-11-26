<template>
  <div class="layout">
    <UHeader title="Rental">
      <UTabs v-model="activeTab" :content="false" :items="tabs" />

      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>

    <UMain>
      <UContainer>
        <slot />
      </UContainer>
    </UMain>

    <UFooter />
  </div>
</template>

<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'

const router = useRouter()
const route = useRoute()

const tabs = ref<TabsItem[]>([
  {
    label: 'Главная',
    icon: 'i-lucide-home',
    route: '/',
  },
  {
    label: 'Недвижимость',
    icon: 'i-lucide-building-2',
    route: '/nedvizhimost',
  },
  {
    label: 'Авто',
    icon: 'i-lucide-car',
    route: '/transport',
  },
])

const activeTab = ref(tabs.value.findIndex(tab => route.path.startsWith(tab.route)))

watch(() => activeTab.value, () => {
  router.push(tabs.value[activeTab?.value]?.route)
})
</script>

<style lang="scss">
</style>
