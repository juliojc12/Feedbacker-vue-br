<template>
  <ModalFactory />
  <RouterView />
</template>

<script>
  import ModalFactory from './components/ModalFactory/index.vue';
  export default {
    components: { ModalFactory }
  }
</script>