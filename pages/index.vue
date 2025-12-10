<template>
  <div class="index-page">
    <UPageHero
      title="Консьерж-сервис - доступный каждому"
      description="Недвижимость и авто под ключ в Кыргызстане. Мы берем на себя все заботы по поиску, проверке и оформлению недвижимости и автомобилей. Экономьте время — доверьтесь профессионалам."
      class="index-page__hero"
      :ui="{
        description: 'text-lg sm:text-xl/8 text-property',
      }"
    >
      <template #footer>
        <div class="flex gap-2 place-content-center h-[48px]">
          <UButton
            size="xl"
            label="Узанть больше"
            href="#services"
          />

          <UButton
            size="xl"
            label="Почему выбирают нас"
            href="#benefits"
            color="neutral"
            variant="subtle"
          />
        </div>
      </template>
    </UPageHero>

    <UContainer class="flex flex-col gap-32 mt-32">
      <Services />

      <Benefits />

      <HowWorks />

      <Contacts />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'АТ Голден — доступный консьерж-сервис для авто и недвижимости в Кыргызстане (Бишкек, Ош, Джалал-Абад, Каракол, Балыкчы, Талас, Токмак и Узген)',
  meta: [
    { name: 'description', content: 'Поиск, проверка и оформление недвижимости и автомобилей в Кыргызстане (Бишкек, Ош, Джалал-Абад, Каракол, Балыкчы, Талас, Токмак и Узген). АТ Голден — доступный консьерж-сервис, который заботится о каждом этапе сделки. Надёжно, безопасно, профессионально.' },
    { name: 'keywords', content: 'консьерж-сервис, услуги для авто, услуги для недвижимости, покупка авто, продажа авто, оформление авто, проверка авто, недвижимость Кыргызстан, покупка недвижимости, продажа недвижимости, оформление недвижимости, Бишкек, Ош, Джалал-Абад, Каракол, Балыкчы, Талас, Токмак, Узген, безопасные сделки, профессиональный сервис' },
    { property: 'og:title', content: 'АТ Голден — доступный консьерж-сервис для авто и недвижимости в Кыргызстане (Бишкек, Ош, Джалал-Абад, Каракол, Балыкчы, Талас, Токмак и Узген)' },
    { property: 'og:description', content: 'Поиск, проверка и оформление недвижимости и автомобилей в Кыргызстане (Бишкек, Ош, Джалал-Абад, Каракол, Балыкчы, Талас, Токмак и Узген). АТ Голден — доступный консьерж-сервис, который заботится о каждом этапе сделки. Надёжно, безопасно, профессионально.' },
  ],
})
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
