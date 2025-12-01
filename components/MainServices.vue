<template>
  <UPageSection
    id="main-services"
    title="Полный спектр услуг"
    description="Что мы предлагаем"
    :ui="{ container: '!p-0' }"
  >
    <template #body>
      <div class="services-grid">
        <UCard
          v-for="service in services"
          :key="service.title"
          class="service-card"
          variant="subtle"
        >
          <div class="service-title">
            <UIcon
              :name="service.icon"
              class="service-icon"
            />
            {{ service.title }}
          </div>

          <div class="service-description">
            {{ service.description }}
          </div>

          <ul class="service-list">
            <li v-for="item in service.items" :key="item.title">
              {{ item.title }}
            </li>
          </ul>
        </UCard>
      </div>
    </template>
  </UPageSection>
</template>

<script setup lang="ts">
interface Service {
  title: string
  description: string
  icon: string
  items: {
    title: string
  }[]
}

defineProps<{ services: Service[] }>()
</script>

<style scoped lang="scss">
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 500px));
  gap: 28px;
  justify-content: center;

  @include mobile {
    gap: 10px;
    grid-template-columns: repeat(1, minmax(150px, 500px));
  }
}

.service-card {
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
}

.service-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.service-icon {
  width: 22px;
  height: 22px;
}

.service-description {
  margin-bottom: 20px;
}

.service-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.service-list li {
  list-style: disc;
  margin-left: 20px;
}
</style>
