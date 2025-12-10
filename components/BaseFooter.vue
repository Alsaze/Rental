<template>
  <UFooter
    class="border-t border-gray-200 mt-10"
    :ui="{
      center: 'w-full',
    }"
  >
    <div class="w-full py-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
      <div id="footer-contacts">
        <h3 class="font-semibold text-base mb-3">
          Контакты
        </h3>
        <ul class="space-y-2 opacity-80">
          <li>
            <span class="font-medium">Телефон:</span><br>
            <a href="tel:+996700115500" class="hover:opacity-100 opacity-70">
              +9 (967) 001-15-500
            </a>
          </li>
          <li>
            <span class="font-medium">Email:</span><br>
            <a href="mailto:info@rental-concierge.com" class="hover:opacity-100 opacity-70">
              info@rental-concierge.com
            </a>
          </li>
          <li>
            <span class="font-medium">Адрес:</span><br>
            <p class="opacity-70">
              Адрес Бишкек, Свердловский район,
              ул.Ибраимова, дом 115/4
            </p>
          </li>
        </ul>
      </div>

      <div id="footer-contacts">
        <h3 class="font-semibold text-base mb-3">
          Реквизиты
        </h3>
        <ul class="space-y-2 opacity-80">
          <li>
            <p class="opacity-70">
              Общество с ограниченной ответственностью "АТ Голден"
            </p>
          </li>
          <li>
            <p class="opacity-70">
              ИНН 00406202010276
            </p>
          </li>
          <li>
            <p class="opacity-70">
              Регистрационный номер 190962-3301-ООО
            </p>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-base mb-3">
          Навигация
        </h3>
        <ul class="space-y-2 opacity-80">
          <li><a href="/" class="hover:opacity-100 opacity-70">Главная</a></li>
          <li><a href="/nedvizhimost" class="hover:opacity-100 opacity-70">Недвижимость</a></li>
          <li><a href="/transport" class="hover:opacity-100 opacity-70">Авто</a></li>
          <li><a href="/about-us" class="hover:opacity-100 opacity-70">О нас</a></li>
        </ul>
      </div>

      <div class="md:text-right opacity-70 flex flex-col justify-between">
        <div class="text-lg font-bold">
          Rental
        </div>
        <div class="mt-4 md:mt-0">
          © {{ new Date().getFullYear() }} Rental.
          Все права защищены.
        </div>
      </div>
    </div>
  </UFooter>
</template>
