<template>
  <UPageSection
    title="Что мы предлагаем"
    description="Полный спектр консьерж-услуг для работы с недвижимостью и автомобилями"
    :ui="{ container: '!p-0' }"
  >
    <template #body>
      <div class="services">
        <NuxtLink
          v-for="service in services"
          :key="service.name"
          class="service"
          :to="service.name"
        >
          <img :src="service.img" :alt="`Service Image ${service.name}`">

          <div class="service__title">
            {{ service.title }}
          </div>

          <div class="service__items">
            <div
              v-for="item in service.items"
              :key="item.title"
              class="service__item"
            >
              <div class="service__icon">
                {{ item.icon }}
              </div>

              <div>
                <p>{{ item.title }}</p>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </template>
  </UPageSection>
</template>

<script setup lang="ts">
const services = [
  {
    name: 'nedvizhimost',
    img: 'photo-1627141234469-24711efb373c.jpg',
    title: 'Недвижимость',
    items: [
      {
        icon: '🏠',
        title: 'Аренда недвижимости',
        description: 'Подбор квартир и домов по вашим критериям',
      },
      {
        icon: '🔑',
        title: 'Покупка недвижимости',
        description: 'Полное сопровождение сделки от A до Я',
      },
      {
        icon: '📋',
        title: 'Продажа недвижимости',
        description: 'Оценка, маркетинг и поиск покупателей',
      },
    ],
  },
  {
    name: 'transport',
    img: 'photo-1685023911870-12430a741d41.jpg',
    title: 'Автомобили',
    items: [
      {
        icon: '🚗',
        title: 'Аренда авто',
        description: 'Подбор автомобиля для краткосрочной аренды',
      },
      {
        icon: '🔑',
        title: 'Покупка авто',
        description: 'Помощь в выборе и проверке автомобиля',
      },
      {
        icon: '📋',
        title: 'Продажа авто',
        description: 'Оценка, размещение объявлений, проведение сделки',
      },
    ],
  },
]
</script>

<style lang="scss">
.services {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 32px;

  @include mobile {
    flex-direction: column;
  }
}

.service {
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
  transition: 0.15s ease-out;

  &:hover {
    transform: scale(1.01);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  &__title {
    font-size: 20px;
    font-weight: 600;
    margin: 16px;
  }

  &__items {
    padding: 0 16px 16px;
  }

  &__item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 12px;
  }

  &__icon {
    font-size: 24px;
  }
}
</style>
