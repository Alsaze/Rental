<template>
  <UPageSection
    id="contacts"
    :ui="{ container: '!p-0' }"
  >
    <template #body>
      <div class="contacts">
        <div class="contacts__info">
          <div class="text-sm text-gray-400">
            Свяжитесь с нами
          </div>

          <div class="text-2xl font-semibold">
            Начните работу с Rental
          </div>

          <div class="text-base text-gray-300 mt-2">
            Оставьте заявку, и наш менеджер свяжется с вами в течение 15 минут<br>
            для обсуждения ваших потребностей.
          </div>

          <div class="flex flex-col gap-4 mt-4">
            <div
              v-for="contact in contacts"
              :key="contact.label"
              class="flex items-center gap-4"
            >
              <div class="bg-gray-800 p-3 rounded-lg">
                <UIcon :name="contact.icon" />
              </div>

              <div>
                <div class="text-sm text-gray-400">
                  {{ contact.label }}
                </div>

                <div class="text-base">
                  {{ contact.value }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <UCard variant="subtle" class="w-full" :ui="{ root: 'max-w-[500px]' }">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              Как к вам обращаться
              <UInput
                placeholder="Имя"
                size="xl"
                class="w-full"
              />
            </div>

            <div class="flex flex-col gap-2">
              Телефон
              <UInput
                v-maska="'+7 (###) ###-##-##'"
                placeholder="+7 (___) __-__-__"
                size="xl"
                class="w-full"
              />
            </div>

            <div class="flex flex-col gap-2">
              Что вас интересует?
              <div>
                <USelect
                  :items="services"
                  class="w-full"
                  size="xl"
                  placeholder="выберите услугу"
                />
              </div>
            </div>

            <div class="flex flex-col gap-2">
              Комментарий
              <UTextarea
                size="xl"
                placeholder="расскажите о ваших требованиях.."
              />
            </div>

            <div>
              <UButton
                size="xl"
                class="flex place-content-center w-full"
                label="Отправить заявку"
              />
            </div>
          </div>
        </UCard>
      </div>
    </template>
  </UPageSection>
</template>

<script setup>
const contacts = [
  {
    label: 'Телефон',
    value: '+7 (495) 123-45-67',
    icon: 'i-lucide:phone',
  },
  {
    label: 'Email',
    value: 'info@rental-concierge.com',
    icon: 'i-lucide:mail',
  },
  {
    label: 'Адрес',
    value: 'Москва, Тверская улица, 1',
    icon: 'i-lucide:map-pin',
  },
]

const services = [
  'покупка авто',
  'продажа авто',
  'аренда авто',
  'покупка недвижимости',
  'продажа недвижимости',
  'аренда недвижимости',
]
</script>

<style lang="scss">
.contacts {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @include mobile {
    flex-direction: column;
    gap: 60px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
}
</style>
