<script setup lang="ts">
const links = ['Features', 'Pricing', 'Resources'];
</script>
<template>
  <header>
    <Popover class="relative">
      <div class="flex items-center justify-between px-6 py-10">
        <img
          src="~/assets/images/logo.svg"
          alt="Shortly"
          class="h-8"
        />

        <PopoverButton
          class="flex items-center justify-center focus:outline-none"
        >
          <Icon name="heroicons:bars-3-20-solid" class="w-6 h-5" />
        </PopoverButton>

        <PopoverPanel
          class="absolute top-20 left-1/2 -translate-x-1/2 z-50 w-[327px]"
        >
          <div
            class="bg-violet text-white text-center w-full rounded-[10px]"
          >
            <div class="grid gap-[30px] px-6 py-10">
              <div v-for="(link, index) of links" :key="index">
                <NuxtLink to="/" class="text-lg/normal font-bold">{{
                  link
                }}</NuxtLink>
              </div>
              <div class="w-full h-[1px] bg-gray-dark" />
              <NuxtLink to="/" class="text-lg/normal font-bold">
                Login
              </NuxtLink>
              <Button label="Sign Up" />
            </div>
          </div>
        </PopoverPanel>
      </div>
    </Popover>
  </header>
</template>
