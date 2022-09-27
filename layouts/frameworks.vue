<template>
  <div>
    <Navbar />
    <div class="pl-64">
      <slot />
    </div>
  </div>
</template>

<script setup>
  import Navbar from '~~/components/Navbar.vue';
</script>
