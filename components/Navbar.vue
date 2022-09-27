<template>
  <nav 
    class="absolute top-0 left-0 flex flex-col justify-around w-60 h-full pl-7 bg-white"
    >
    <h1>JSFrameworks</h1>
    <ul class="h-96 overflow-y-scroll">
      <li><NuxtLink to="/frameworks">Overview</NuxtLink></li>
      <li><NuxtLink to="/frameworks/frontend">Front-End</NuxtLink></li>
      <li><NuxtLink to="/frameworks/backend">Back-End</NuxtLink></li>
      <li><NuxtLink to="/frameworks/desktop">Desktop</NuxtLink></li>
      <li><NuxtLink to="/frameworks/mobile">Mobile</NuxtLink></li>
      <li><NuxtLink to="/frameworks/testing">Testing</NuxtLink></li>
      <li><NuxtLink to="/frameworks/bundlers">Bundlers</NuxtLink></li>
      <li><NuxtLink to="/frameworks/packages">Packages</NuxtLink></li>
      <li><NuxtLink to="/frameworks/taskrunners">Task-Runners</NuxtLink></li>
      <li><NuxtLink to="/frameworks/videogames">Videogames</NuxtLink></li>
    </ul>
    <NuxtLink to="/">Home</NuxtLink>
  </nav>
</template>

<style>
  li {
    margin-bottom: 50px;
  }
</style>