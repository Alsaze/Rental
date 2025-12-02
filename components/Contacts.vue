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
          <form @submit.prevent="onSubmit">
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-2">
                Как к вам обращаться
                <UInput
                  id="name"
                  v-model="name"
                  v-bind="nameAttrs"
                  name="name"
                  placeholder="Имя"
                  size="xl"
                  class="w-full"
                  autofocus
                />

                <div v-if="errors?.name" style="color: #ff6467">
                  {{ errors?.name }}
                </div>
              </div>

              <div class="flex flex-col gap-2">
                Телефон
                <UInput
                  id="phone"
                  v-model="phone"
                  v-maska="'+7 (###) ###-##-##'"
                  name="phone"
                  v-bind="phoneAttrs"
                  placeholder="+7 (___) __-__-__"
                  size="xl"
                  class="w-full"
                />

                <div v-if="errors?.phone" style="color: #ff6467">
                  {{ errors?.phone }}
                </div>
              </div>

              <div class="flex flex-col gap-2">
                Что вас интересует?
                <div>
                  <USelect
                    id="service"
                    v-model="service"
                    v-bind="serviceAttrs"
                    name="service"
                    :items="services"
                    class="w-full"
                    size="xl"
                    placeholder="выберите услугу"
                  />

                  <div v-if="errors?.service" style="color: #ff6467">
                    {{ errors?.service }}
                  </div>
                </div>
              </div>

              <div class="flex flex-col gap-2">
                Комментарий
                <UTextarea
                  id="comment"
                  v-model="comment"
                  v-bind="commentAttrs"
                  name="comment"
                  size="xl"
                  placeholder="расскажите о ваших требованиях.."
                />
              </div>

              <div>
                <UButton
                  size="xl"
                  class="flex place-content-center w-full"
                  label="Отправить заявку"
                  type="submit"
                  :disabled="errors && Object.keys(errors).length > 0"
                />
              </div>
            </div>
          </form>
        </UCard>
      </div>
    </template>
  </UPageSection>

  <UButton label="pizda" @click="pizda()" />
</template>

<script setup lang="ts">
const toast = useToast()

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

const { errors, handleSubmit, defineField } = useForm({
  initialValues: {
    name: '',
    phone: '',
    service: '',
    comment: '',
  },
  validationSchema: {
    name(value: string) {
      if (!value)
        return 'Укажите имя'
      if (value.trim().length < 2)
        return 'Минимум 2 символа'
      if (/\d/.test(value)) {
        return 'Укажите корректное имя'
      }
      return true
    },
    phone(value: string) {
      if (!value)
        return 'Укажите телефон'
      const digits = (value || '').replace(/\D/g, '')
      if (digits.length < 11)
        return 'Введите корректный телефон'
      return true
    },
    service(value: string) {
      if (!value)
        return 'Укажите услугу'
      return true
    },
  },
})

const [name, nameAttrs] = defineField('name')
const [phone, phoneAttrs] = defineField('phone')
const [service, serviceAttrs] = defineField('service')
const [comment, commentAttrs] = defineField('comment')

const onSubmit = handleSubmit((values) => {
  console.log('onSubmit', values)

  toast.add({
    title: 'Заявка успешно отправлена, мы скоро с вами свяжемся !',
  })
})
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
