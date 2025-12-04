<template>
  <div class="layout">
    <ClientOnly>
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
    </ClientOnly>

    <UMain>
      <slot />
    </UMain>

    <UFooter class="border-t border-gray-200 mt-10">
      <div class="w-full max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        <div id="footer-contacts">
          <h3 class="font-semibold text-base mb-3">
            Контакты
          </h3>
          <ul class="space-y-2 opacity-80">
            <li>
              <span class="font-medium">Телефон:</span><br>
              <a href="tel:+74951234567" class="hover:opacity-100 opacity-70">
                +7 (495) 123-45-67
              </a>
            </li>
            <li>
              <span class="font-medium">Email:</span><br>
              <a href="mailto:info@rental-concierge.com" class="hover:opacity-100 opacity-70">
                info@rental-concierge.com
              </a>
            </li>
            <li>
              <span class="font-medium">Адрес:</span><br>
              Москва, Тверская улица, 1
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-base mb-3">
            Навигация
          </h3>
          <ul class="space-y-2 opacity-80">
            <li><a href="/" class="hover:opacity-100 opacity-70">Главная</a></li>
            <li><a href="/nedvizhimost" class="hover:opacity-100 opacity-70">Недвижимость</a></li>
            <li><a href="/transport" class="hover:opacity-100 opacity-70">Авто</a></li>
          </ul>
        </div>

        <div class="md:text-right opacity-70 flex flex-col justify-between">
          <div class="text-lg font-bold">
            Rental
          </div>
          <div class="mt-4 md:mt-0">
            © {{ new Date().getFullYear() }} Rental.
            Все права защищены.
          </div>
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

const activeTab = ref(route?.path.split('/')[1] || '/')

watch(() => activeTab.value, () => {
  const tab = tabs.value.find(tab => tab.value === activeTab.value)
  router.push(tab?.route)
})

watch(() => route?.path, () => {
  const routerPath = route?.path?.split('/')[1]

  if (routerPath === activeTab.value) {
    return
  }

  activeTab.value = routerPath
})
</script>
