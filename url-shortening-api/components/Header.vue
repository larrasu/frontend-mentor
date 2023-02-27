<template>
  <header aria-label="Site Header">
    <NuxtLink to="/">
      <div class="sr-only">Home</div>
      <img src="~/assets/images/logo.svg" alt="Shortly Logo" />
    </NuxtLink>
    <div>
      <nav aria-label="Site Navigation">
        <ul>
          <li v-for="item of menu">
            <NuxtLink to="/">
              {{ item }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
const menu = ["Features", "Pricing", "Resources"];
</script>
