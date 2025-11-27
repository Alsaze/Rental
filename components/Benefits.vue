<template>
  <UPageSection
    id="benefits"
    title="Почему выбирают нас"
    description="Преимущества сервиса"
    :ui="{ container: '!p-0' }"
  >
    <template #body>
      <div ref="benefitsRef" class="benefits">
        <div
          v-for="benefit in benefits"
          :key="benefit.title"
          class="benefit"
        >
          <div class="benefit__icon">
            {{ benefit.icon }}
          </div>

          <div class="benefit__title">
            {{ benefit.title }}
          </div>

          <div class="benefit__description">
            {{ benefit.description }}
          </div>
        </div>
      </div>
    </template>
  </UPageSection>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted, ref } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const benefitsRef = ref()
let benefitsCtx

onMounted(() => {
  desktopAnimation()
})

function desktopAnimation() {
  benefitsCtx = gsap.context((self) => {
    const boxes = self.selector('.benefit')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: benefitsRef.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })

    tl.from(boxes, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.25,
    })
  }, benefitsRef.value)
}

const benefits = [
  {
    icon: '⏱️',
    title: 'Экономия времени',
    description: 'Мы берем на себя все рутинные задачи — от поиска до оформления документов',
  },
  {
    icon: '🛡️',
    title: 'Безопасность сделок',
    description: 'Полная юридическая проверка объектов и контрагентов',
  },
  {
    icon: '👤',
    title: 'Личный менеджер',
    description: 'Персональный консультант на всех этапах работы',
  },
  {
    icon: '⭐',
    title: 'Лучшие условия',
    description: 'Используем партнерскую сеть для получения выгодных предложений',
  },
  {
    icon: '💬',
    title: 'Поддержка 24/7',
    description: 'Всегда на связи для решения любых вопросов',
  },
  {
    icon: '🏆',
    title: 'Опыт и экспертиза',
    description: 'Более 10 лет на рынке консьерж-услуг',
  },
]

onUnmounted(() => {
  benefitsCtx?.revert()
})
</script>

<style lang="scss">
.benefits {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(150px, 350px));
  justify-content: center;

  @include mobile {
    gap: 10px;
    grid-template-columns: repeat(2, minmax(150px, 350px));
  }
}

.benefit {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 300px;

  &__icon {
    font-size: 24px;
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
