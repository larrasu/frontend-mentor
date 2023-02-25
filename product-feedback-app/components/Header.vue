<template>
  <div>
    <Popover v-slot="{ open }">
      <div
        class="md:hidden bg-mobile-header flex items-center justify-between px-6 py-4 text-white bg-cover"
      >
        <div>
          <p class="font-bold">Frontend Mentor</p>
          <p>Feedback Board</p>
        </div>
        <div>
          <PopoverButton class="outline-none">
            <NuxtSvgIcon
              :name="open ? 'mobile/close' : 'mobile/hamburger'"
              :use-origin-size="true"
              class="fill-white"
            />
          </PopoverButton>
        </div>
      </div>

      <PopoverOverlay class="bg-black/25 absolute inset-0 top-[136px] z-10" />
      <Drawer />
    </Popover>

    <div
      class="bg-dark-200 text-base-100 md:rounded-base flex items-center justify-between px-4 py-5 lg:w-[825px]"
    >
      <div class="flex items-center">
        <div class="md:flex items-center hidden gap-2">
          <NuxtSvgIcon
            name="suggestions"
            fill="white"
            :use-origin-size="true"
          />
          <span>{{ sortedRequests.length }} Suggestions</span>
        </div>
        <Menu as="div" class="relative" v-slot="{ open }">
          <MenuButton class="hover:no-underline space-x-2 text-white">
            <span
              >Sort by : <b>{{ currentOption }}</b></span
            >
            <NuxtSvgIcon
              name="arrow-down"
              :use-origin-size="true"
              class="stroke-white transition"
              :class="{ '-rotate-180': open }"
            />
          </MenuButton>
          <MenuItems>
            <div
              class="absolute bg-base-100 text-dark-200 w-[255px] grid shadow-base divide-y divide-tertiary/15 rounded-base mt-8"
            >
              <MenuItem v-for="option of sortOptions">
                <button
                  @click="requestStore.setCurrentOption(option)"
                  class="flex items-center justify-between px-6 py-3 text-left"
                  :class="{ 'text-primary': option == currentOption }"
                >
                  <span>{{ option }}</span>
                  <NuxtSvgIcon
                    v-if="option == currentOption"
                    name="check"
                    :use-origin-size="true"
                    class="stroke-primary fill-none"
                  />
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>

      <div>
        <NuxtLink to="/requests/create" class="btn-primary space-x-2">
          <NuxtSvgIcon name="plus" :use-origin-size="true" />
          <span>Add Feedback</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const requestStore = useRequestStore();
const { sortedRequests, sortOptions, currentOption } =
  storeToRefs(requestStore);
</script>
