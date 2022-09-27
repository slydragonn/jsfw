<template>
  <NuxtLayout name="frameworks">
    <h1>{{ category.toUpperCase()}}</h1>
  </NuxtLayout>
</template>

<script setup>
  const route = useRoute()
  const category = route.params.category
</script>