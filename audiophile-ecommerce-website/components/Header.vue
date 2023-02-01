<template>
  <Popover v-slot="{ open }">
    <div class="bg-black text-white border-b border-[#979797]">
      <div class="flex items-center justify-between px-6 py-8">
        <div class="lg:hidden">
          <PopoverButton class="outline-none relative">
            <Icon
              name="heroicons:bars-3-20-solid"
              class="w-[25px] h-[25px] transform transition"
              :class="{ 'opacity-0 rotate-180 hidden': open }"
            />
            <Icon
              name="heroicons:x-mark-20-solid"
              class="w-[30px] h-[30px] transform transition absolute top-0 left-0"
              :class="{ 'opacity-0 -rotate-180 hidden ': !open }"
            />
          </PopoverButton>
        </div>
        <div>
          <img src="~/assets/shared/desktop/logo.svg" alt="Audiophile Logo" />
        </div>
        <div class="hidden lg:flex items-center gap-4">
          <NuxtLink
            v-for="item of props.menu"
            :to="item.link"
            class="transition uppercase text-white hover:text-primary-200 font-bold text-[13px] leading-[25px] tracking-[2px]"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
        <div>
          <button>
            <Icon name="heroicons:shopping-cart" class="w-[25px] h-[25px]" />
          </button>
        </div>
      </div>
    </div>

    <PopoverOverlay class="fixed inset-0 top-[90px] bg-black bg-opacity-50" />
    <PopoverPanel>
      <div class="absolute top-[90px] bg-white w-full rounded-b-lg">
        <div class="flex flex-col px-6 py-8">
          <div v-for="item in menu" class="bg-accent-200 rounded-lg">
            <img :src="item.img" :class="item.size" />
            <p>{{ item.name }}</p>
            <NuxtLink :to="item.link"
              ><p>Shop</p>
              <Icon name="heroicons:chevron-right-20-solid" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </PopoverPanel>
  </Popover>
</template>

<script setup>
const props = defineProps({
  menu: {
    type: Array,
    required: true,
  },
});

const menu = props.menu.splice(1);
</script>
