<template>
  <div class="lg:flex-col flex md:grid md:grid-cols-3 gap-[10px]">
    <section
      class="bg-cover md:bg-tablet-header lg:bg-desktop-header rounded-base text-white md:h-[178px] lg:w-[255px] lg:h-[137px] flex flex-col justify-end p-6"
    >
      <h1 class="text-xl font-bold tracking-[-0.25px]">Frontend Mentor</h1>
      <p class="font-medium">Feedback Board</p>
    </section>
    <section class="bg-base-100 rounded-base p-6">
      <div class="flex flex-wrap w-full gap-2">
        <button
          v-for="category of categories"
          @click="requestStore.setCurrentCategory(category)"
          class="btn-sm btn-plain"
          :class="{ active: category == currentCategory }"
        >
          {{ category }}
        </button>
      </div>
    </section>
    <section class="bg-base-100 rounded-base p-6"></section>
  </div>
</template>

<script setup>
const requestStore = useRequestStore();
const { categories, currentCategory } = storeToRefs(requestStore);
</script>
