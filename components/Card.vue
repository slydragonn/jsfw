<template>
  <article :style="{backgroundColor: color}" class="flex flex-col justify-around w-44 h-36 rounded-sm py-2 px-4 text-gray-800">
    <h3 class="uppercase font-medium text-sm">{{title}}</h3>
    <span class="font-thin text-xs text-gray-500">{{date}}</span>
    <span class="font-thin text-xs text-gray-700">by {{createBy}}</span>
    <div class="flex w-full justify-between border-t border-gray-400/50">
      <a :href="githubLink" target="_blank" class="italic text-sm">Github</a>
      <span>{{githubStars}}</span>
    </div>
  </article>
</template>

<script setup>
  defineProps({
    title: String,
    date: String,
    createBy: String,
    githubLink: String,
    githubStars: Number,
    color: String
  })
</script>

<style>
  article {
    box-shadow: 3px 5px rgba(122, 122, 122, 0.2);
  }
</style>
