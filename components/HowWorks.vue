<template>
  <UPageSection
    id="how-works"
    title="Как это работает"
    description="Простой процесс"
    :ui="{ container: '!p-0' }"
  >
    <template #body>
      <div class="how-works">
        <UCard
          v-for="item in items"
          :key="item.title"
          class="how-work"
          :ui="{ body: 'flex flex-col gap-4 h-[350px] !pb-15' }"
        >
          <div class="how-work__number">
            {{ item.number }}
          </div>

          <div class="how-work__icon">
            {{ item.icon }}
          </div>

          <div class="how-work__title">
            {{ item.title }}
          </div>

          <div class="how-work__description">
            {{ item.description }}
          </div>
        </UCard>
      </div>
    </template>
  </UPageSection>
</template>

<script setup lang="ts">
const items = [
  {
    icon: '💬',
    number: '01',
    title: 'Консультация',
    description: 'Связываетесь с нами и рассказываете о своих требованиях и пожеланиях',
  },
  {
    icon: '🔍',
    number: '02',
    title: 'Подбор вариантов',
    description: 'Мы находим лучшие предложения, соответствующие вашим критериям',
  },
  {
    icon: '📋',
    number: '03',
    title: 'Проверка и оформление',
    description: 'Проводим полную проверку и помогаем с оформлением всех документов',
  },
  {
    icon: '🔑',
    number: '04',
    title: 'Получение',
    description: 'Вы получаете ключи от недвижимости или документы на автомобиль',
  },
]
</script>

<style lang="scss">
.how-works {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, minmax(150px, 350px));
  justify-content: space-between;

  @include mobile {
    gap: 10px;
    grid-template-columns: repeat(2, minmax(150px, 350px));
  }
}

.how-work {
  &__number {
    font-size: 48px;
    opacity: 0.1;
    font-weight: 600;
  }

  &__icon {
    font-size: 24px;
    width: 48px;
    height: 48px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
  }

  &__title {
    font-size: 20px;
    font-weight: 600;
  }

  &__description {
    font-size: 14px;
  }
}
</style>
