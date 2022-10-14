<template>
  <section class="px-5">
    <p class="font-thin text-sm md:text-base max-w-xl">{{summary}}</p>
    <ul class="summary-urls flex mt-5 font-thin italic text-sm underline">
      <li><a :href="urls.docs" target="_blank">Documentation</a></li>
      <li><a :href="urls.npm" target="_blank">npm</a></li>
      <li><a :href="urls.yarn" target="_blank">yarn</a></li>
    </ul>
  </section>
</template>

<script setup>
  defineProps({
    summary: String,
    urls: {
      docs:  String,
      npm: String,
      yarn: String
    }
  })
</script>

<style>
  .summary-urls > li {
    margin-right: 15px;
  }
</style>