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
        <Icon class="cursor-pointer w-6 h-6" name="lucide:arrow-left" @click="routerBack()" />

        <NuxtLink to="/" class="absolute left-1/2 transform -translate-x-1/2 text-lg">
          Rental
        </NuxtLink>
      </template>
    </UHeader>

    <UMain>
      <slot />
    </UMain>

    <UFooter class="footer">
      <div class="flex flex-col md:flex-row items-center text-sm opacity-70">
        <div>
          © {{ new Date().getFullYear() }} Rental. Все права защищены.
        </div>
      </div>
    </UFooter>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const { cartById } = useMock()
const cart = cartById(route?.params?.id)

function routerBack() {
  const newRoute = `/${cart?.category}#variations`
  router.push(newRoute)
}
</script>

<style lang="scss" scoped>
.footer {
  @include mobile {
    display: none;
  }
}
</style>
