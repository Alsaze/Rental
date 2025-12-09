<template>
  <UFooter
    class="border-t border-gray-200 mt-10"
    :ui="{
      center: 'w-full',
    }"
  >
    <div class="w-full py-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
      <div id="footer-contacts">
        <h3 class="font-semibold text-base mb-3">
          Контакты
        </h3>
        <ul class="space-y-2 opacity-80">
          <li>
            <span class="font-medium">Телефон:</span><br>
            <a href="tel:+74951234567" class="hover:opacity-100 opacity-70">
              +7 (495) 123-45-67
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
            Москва, Тверская улица, 1
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
