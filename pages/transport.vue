<template>
  <div class="transport-page">
    <UPageHero
      title="Премиум автомобили под ключ"
      description="Аренда, покупка и продажа автомобилей премиум-класса с полным сервисным сопровождением и гарантией качества в Кыргызстане (Бишкек, Ош, Джалал-Абад, Каракол, Балыкчы, Талас, Токмак и Узген)."
      class="transport-page__hero"
      :ui="{
        description: 'text-lg sm:text-xl/8 text-property',
      }"
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

    <UContainer class="flex flex-col gap-12 mt-12">
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
    title: 'Краткосрочная аренда',
    description: 'Подбор автомобиля для поездок по городу или путешествий',
    items: [
      { title: 'Автомобили премиум-класса' },
      { title: 'Доставка к вашему адресу' },
      { title: 'Страховка включена' },
      { title: 'Помощь на дороге 24/7' },
    ],
  },
  {
    icon: 'i-lucide:shopping-bag',
    title: 'Долгосрочная аренда',
    description: 'Аренда автомобиля на длительный срок с выгодными условиями',
    items: [
      { title: 'Гибкие сроки аренды' },
      { title: 'Техобслуживание включено' },
      { title: 'Замена автомобиля' },
      { title: 'Индивидуальные условия' },
    ],
  },
  {
    icon: 'i-lucide:package',
    title: 'Покупка автомобиля',
    description: 'Полное сопровождение при покупке нового или подержанного авто',
    items: [
      { title: 'Подбор по параметрам' },
      { title: 'Техническая экспертиза' },
      { title: 'Проверка юридической чистоты' },
      { title: 'Оформление документов' },
    ],
  },
  {
    icon: 'i-lucide:building',
    title: 'Продажа автомобиля',
    description: 'Быстрая и выгодная продажа вашего автомобиля',
    items: [
      { title: 'Оценка рыночной стоимости' },
      { title: 'Профессиональная фотосъемка' },
      { title: 'Размещение на площадках' },
      { title: 'Безопасное проведение сделки' },
    ],
  },
]

const { cartByCategory } = useMock()
const previewItems = computed(() => cartByCategory('transport'))

useHead({
  title: 'Премиум автомобили в Кыргызстане — аренда, покупка и продажа с полным сопровождением',
  meta: [
    {
      name: 'description',
      content: 'АТ Голден предлагает аренду, покупку и продажу автомобилей премиум-класса в Бишкеке, Оше, Джалал-Абаде, Караколе и других городах Кыргызстана. Полное сервисное сопровождение, юридическая проверка и безопасность сделок.',
    },
    {
      name: 'keywords',
      content: 'автомобили премиум-класса, аренда авто, краткосрочная аренда, долгосрочная аренда, покупка автомобиля, продажа автомобиля, проверка юридической чистоты, техническая экспертиза, безопасные сделки, сопровождение сделки, доставка авто, страховка авто, Бишкек, Ош, Джалал-Абад, Каракол, Балыкчы, Талас, Токмак, Узген',
    },
    { property: 'og:title', content: 'Премиум автомобили в Кыргызстане — аренда, покупка и продажа с полным сопровождением' },
    { property: 'og:description', content: 'АТ Голден предлагает аренду, покупку и продажу автомобилей премиум-класса в Бишкеке, Оше, Джалал-Абаде, Караколе и других городах Кыргызстана. Полное сервисное сопровождение, юридическая проверка и безопасность сделок.' },
  ],
})

definePageMeta({
  layout: 'default',
})
</script>

<style lang="scss">
.transport-page {
  display: flex;
  flex-direction: column;

  &__hero {
    width: 100%;
    height: 100vh;

    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/transport.jpg');
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
