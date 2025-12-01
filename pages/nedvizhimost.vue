<template>
  <div class="nedvizhimost-page">
    <UPageHero
      title="Недвижимость вашей мечты"
      :description="`Помогаем найти, купить или продать недвижимость с полным\n юридическим сопровождением и гарантией безопасности сделки.`"
      class="nedvizhimost-page__hero"
    >
      <template #footer>
        <div class="flex gap-2 place-content-center h-[48px]">
          <UButton
            size="xl"
            label="Смотреть услуги"
            href="#main-services"
          />

          <UButton
            size="xl"
            label="Смотреть варианты"
            href="#variations"
            color="neutral"
            variant="subtle"
          />
        </div>
      </template>
    </UPageHero>

    <UContainer class="flex flex-col gap-32 mt-32">
      <MainServices :services="services" />

      <MainCarusel :preview-items="previewItems" />

      <Contacts />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const services = [
  {
    icon: 'i-lucide:home',
    title: 'Аренда жилой недвижимости',
    description:
        'Подбираем квартиры, дома и апартаменты для краткосрочной и долгосрочной аренды',
    items: [
      { title: 'Проверка юридической чистоты' },
      { title: 'Согласование условий договора' },
      { title: 'Сопровождение сделки' },
      { title: 'Помощь с переездом' },
    ],
  },
  {
    icon: 'i-lucide:shopping-bag',
    title: 'Покупка недвижимости',
    description:
        'Полное сопровождение процесса покупки от поиска до получения ключей',
    items: [
      { title: 'Анализ рынка и оценка' },
      { title: 'Проверка документов' },
      { title: 'Согласование ипотеки' },
      { title: 'Регистрация сделки' },
    ],
  },
  {
    icon: 'i-lucide:package',
    title: 'Продажа недвижимости',
    description:
        'Профессиональная подготовка и продажа вашей недвижимости',
    items: [
      { title: 'Оценка и фотосъёмка' },
      { title: 'Маркетинг и реклама' },
      { title: 'Показы объекта' },
      { title: 'Юридическое оформление' },
    ],
  },
  {
    icon: 'i-lucide:building',
    title: 'Коммерческая недвижимость',
    description:
        'Работа с офисами, торговыми и складскими помещениями',
    items: [
      { title: 'Аренда офисов' },
      { title: 'Покупка коммерческих объектов' },
      { title: 'Инвестиционные проекты' },
      { title: 'Due diligence' },
    ],
  },
]

const previewItems = [
  {
    id: 13242314,
    img: 'https://picsum.photos/468/468?random=1',
  },
  {
    id: 123321,
    img: 'https://picsum.photos/468/468?random=2',
  },
  {
    id: 7654567,
    img: 'https://picsum.photos/468/468?random=3',
  },
  {
    id: 3203030,
    img: 'https://picsum.photos/468/468?random=4',
  },
  {
    id: 1818822,
    img: 'https://picsum.photos/468/468?random=5',
  },
  {
    id: 12355432,
    img: 'https://picsum.photos/468/468?random=6',
  },
  {
    id: 3495823,
    img: 'https://picsum.photos/468/468?random=7',
  },
  {
    id: 1123,
    img: 'https://picsum.photos/468/468?random=8',
  },
]
</script>

<style lang="scss">
.nedvizhimost-page {
  display: flex;
  flex-direction: column;

  &__hero {
    width: 100%;
    height: 100vh;

    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/nedvizhimost.webp');
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
