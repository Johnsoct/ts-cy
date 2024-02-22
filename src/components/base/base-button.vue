<script setup lang="ts">
  // Packages
  import {
    ref,
    watch,
  } from 'vue';

  const emits = defineEmits([
    'click',
  ]);
  const props = defineProps({
    disabled: {
      default: false,
      required: false,
      type: Boolean,
    },
    icon: {
      default: null,
      required: false,
      type: String,
      validator: (value: string) => {
        return [
          'ring',
        ].includes(value);
      },
    },
    loading: {
      default: false,
      required: false,
      type: Boolean,
    },
    size: {
      default: 'md',
      required: false,
      type: String,
      validator: (value: string) => {
        return [
          'lg',
          'md',
          'xl',
        ].includes(value);
      },
    },
    type: {
      default: 'primary',
      required: false,
      type: String,
      validator: (value: string) => {
        return [
          'primary',
          'secondary',
          'tertiary',
        ].includes(value);
      },
    },
  });

  const loading = ref(props.loading);

  const clickHandler = ($event: Event): void => {
    if (props.disabled || props.loading) {
      $event.stopPropagation();
      return;
    }
    else {
      emits('click', $event);
    }
  };
</script>

<template>
  <button
    @click="clickHandler"
    :aria-disabled="disabled"
    :disabled="disabled"
    data-cy="base-button"
  >
    <slot />
  </button>
</template>

<style lang="sass" scoped>
</style>
