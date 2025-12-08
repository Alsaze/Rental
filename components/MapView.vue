<template>
  <div>
    <h2>Где вы будете жить</h2>
    <p>{{ marker.subtitle }}</p>
  </div>

  <YandexMap
    :settings="{ location }"
    style="height: 600px; min-height: 300px"
    class="map-view"
  >
    <YandexMapDefaultSchemeLayer />
    <YandexMapDefaultFeaturesLayer />

    <YandexMapMarker :settings="marker">
      <div class="marker">
        <Icon name="i-lucide-home" class="marker__icon" />
      </div>
    </YandexMapMarker>
  </YandexMap>
</template>

<script setup lang="ts">
import type { YandexMapDefaultMarkerSettings } from 'vue-yandex-maps'
import {
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapMarker,
} from 'vue-yandex-maps'

const props = defineProps<{ marker: YandexMapDefaultMarkerSettings }>()

const location = computed(() => ({
  center: props.marker.coordinates ?? [37.9, 55.9],
  zoom: 15,
  duration: 2500,
}))
</script>

<style lang="scss" scoped>
.map-view {
  border-radius: 24px;
  overflow: hidden;
}

.marker {
  position: relative;
  background-color: #0f172b;
  border: 1px solid #0f172b;
  border-radius: 12px;
  padding: 6px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transition:
    transform 0.2s ease,
    background-color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background-color: #1e293b;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #0f172b;
    filter: drop-shadow(0 2px 1px rgba(0, 0, 0, 0.15));
  }

  &__icon {
    color: white;
    width: 20px;
    height: 20px;
  }

  &:hover &__icon {
    color: var(--ui-primary);
    transform: scale(1.1);
  }
}
</style>
