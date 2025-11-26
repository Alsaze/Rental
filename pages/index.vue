<template>
  <div class="index-page">
    <UPageHero
      title="Консьерж-сервис премиум класса"
      :description="`Недвижимость и авто под ключ\nМы берем на себя все заботы по поиску, проверке и оформлению недвижимости и автомобилей. Экономьте время — доверьтесь профессионалам.`"
      :links="links"
      class="index-page__hero"
    />

    <UContainer>
      <Services />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import Services from '~/components/Services.vue'

const links = computed(() => [
  {
    label: 'Начать работу',
    to: '/docs/getting-started',
    icon: 'i-lucide-square-play',
  },
  {
    label: 'Узнать больше',
    to: '/docs/getting-started/theme/design-system',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right',
  },
])
</script>

<style lang="scss">
.index-page {
  display: flex;
  flex-direction: column;

  &__hero {
    width: 100%;
    height: 100vh;

    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>
