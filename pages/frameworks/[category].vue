<template>
  <NuxtLayout name="frameworks">
    <section class="p-5">
      <h1 class="uppercase font-medium text-3xl">{{ category}}</h1>
      <div v-if="categories.includes(category)">Coming Soon!!!</div>
      <div v-else>
        <ul class="mt-10">
        <li v-for="framework in data" class="flex mb-20">
          <Card 
            :title="framework.name"
            :date="framework.creationDate"
            :createBy="framework.createBy"
            :githubLink="framework.urls.github"
            :githubStars="55"
            :color="framework.color"
          />
          <Summary
            :summary="framework.info.en.summary"
            :urls="{docs: framework.urls.docs, npm: framework.urls.npm, yarn: framework.urls.yarn}"
          />
          </li>
        </ul>
      </div>
  </section>
  </NuxtLayout>
</template>

<script setup>
  import { getAllFrameworksByCategory } from '../../docs'
  import Card from '~~/components/Card.vue'
  import Summary from '~~/components/Summary.vue'
  const route = useRoute()
  const category = route.params.category

  const categories = ['backend', 'desktop', 'mobile', 'testing', 'bundlers', 'packages', 'taskrunners', 'videogames']

  const data = getAllFrameworksByCategory(category)
</script>