<script setup lang="ts">
useHead({
  title: "Shortly",
  link: [
    { rel: "icon", type: "image/png", href: "/favicon-32x32.png" }
  ]
})
</script>

<template>
  <div class="overflow-x-hidden">
    <Header />

    <Hero />

    <Shortly />

    <Features />

    <CTA />

    <Footer />
  </div>
</template>
