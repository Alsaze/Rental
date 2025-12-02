<template>
  <div class="index-page">
    <UPageHero
      title="Консьерж-сервис - доступный каждому"
      :description="`Недвижимость и авто под ключ\nМы берем на себя все заботы по поиску, проверке и оформлению недвижимости и автомобилей. Экономьте время — доверьтесь профессионалам.`"
      class="index-page__hero"
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
