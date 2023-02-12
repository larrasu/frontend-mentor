<template>
  <Popover v-slot="{ open }">
    <div
      class="bg-mobile-header sticky top-0 z-30 text-white bg-no-repeat bg-cover"
    >
      <div class="flex items-center justify-between px-6 py-4">
        <div>
          <h1
            class="font-bold text-[15px] leading-[21.68px] tracking-[-0.19px]"
          >
            Frontend Mentor
          </h1>
          <p class="text-[13px] leading-[18.79px]">Feedback Board</p>
        </div>
        <div>
          <PopoverButton class="outline-none">
            <Icon name="heroicons:bars-3-20-solid" class="w-5 h-5" />
          </PopoverButton>
        </div>
      </div>
    </div>

    <TransitionRoot :show="open">
      <TransitionChild
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <PopoverOverlay class="fixed inset-0 top-0 z-10 bg-black opacity-50" />
      </TransitionChild>

      <TransitionChild
        enter="transition ease-in-out duration-300 transform"
        enter-from="translate-x-full"
        enter-to="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leave-from="translate-x-0"
        leave-to="translate-x-full"
      >
        <PopoverPanel class="relative">
          <MobileSidebar />
        </PopoverPanel>
      </TransitionChild>
    </TransitionRoot>

    <div class="bg-tertiary-200 text-white text-[13px]">
      <div class="flex items-center justify-between px-6 py-4">
        <Menu as="div" class="relative" v-slot="{ open }">
          <MenuButton class="btn gap-2 p-0">
            <p>
              Sort by : <b>{{ currentSortBy }}</b>
            </p>
            <Icon
              name="heroicons:chevron-down-20-solid"
              class="w-5 h-5 transition transform"
              :class="{ '-rotate-180': open }"
            />
          </MenuButton>

          <TransitionRoot
            enter="transition duration-100 ease-out"
            enter-from="transform scale-95 opacity-0"
            enter-to="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leave-from="transform scale-100 opacity-100"
            leave-to="transform scale-95 opacity-0"
          >
            <MenuItems class="absolute mt-8">
              <div
                class="flex flex-col bg-white text-accent-200 rounded-base divide-y divide-accent-200/15 w-[255px] shadow-base"
              >
                <MenuItem v-for="option in sortOptions" :key="option">
                  <button
                    @click="mainStore.setCurrentSortBy(option)"
                    class="hover:text-primary-200 flex items-center justify-between px-6 py-3 text-left"
                    :class="{
                      'text-primary-200': option === currentSortBy,
                    }"
                  >
                    <p>{{ option }}</p>
                    <Icon
                      v-if="option == currentSortBy"
                      name="heroicons:check-20-solid"
                      class="w-5 h-5"
                    />
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </TransitionRoot>
        </Menu>

        <button class="btn-primary px-4 py-[11px] font-bold">
          <p>+ Add Feedback</p>
        </button>
      </div>
    </div>
  </Popover>
</template>

<script setup>
const mainStore = useMainStore();

const currentSortBy = computed(() => mainStore.getCurrentSortBy);
const sortOptions = computed(() => mainStore.getSortBy);
</script>
