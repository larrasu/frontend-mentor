<template>
  <header class="relative w-full">
    <div
      aria-label="Site Header"
      class="flex items-center justify-between gap-2 px-6 py-10"
    >
      <NuxtLink to="/">
        <div class="sr-only">Home</div>
        <img src="~/assets/icons/logo.svg" alt="Shortly Logo" />
      </NuxtLink>
      <nav aria-label="Site Navigation" class="md:ml-auto hidden">
        <ul>
          <li v-for="item of menu">
            <NuxtLink to="/">
              {{ item }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div>
        <button @click="showMenu = !showMenu">
          <Icon name="heroicons:bars-3-20-solid" class="text-neutral w-6 h-6" />
        </button>
      </div>
    </div>

    <div
      @click="showMenu = false"
      v-if="showMenu"
      class="fixed left-0 right-0 z-0 w-full h-full mt-0 cursor-pointer"
    ></div>
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <Menu
        v-if="showMenu"
        :menu="menu"
        @close="showMenu = false"
        class="mt-[23px]"
      />
    </Transition>
  </header>
</template>

<script setup>
const menu = ["Features", "Pricing", "Resources"];
const showMenu = ref(false);
</script>
