<template>
  <div>
    <div
      class="bg-dark-200 text-base-100 rounded-base flex items-center justify-between px-4 py-4 w-[825px]"
    >
      <div class="flex items-center">
        <div class="flex items-center gap-2">
          <NuxtSvgIcon
            name="suggestions"
            fill="white"
            :use-origin-size="true"
          />
          <span>{{ requests.length }} Suggestions</span>
        </div>
        <Menu as="div" class="relative">
          <MenuButton class="btn-dark hover:no-underline space-x-2">
            <span>Sort by : <b>Most Upvotes</b></span>
            <Icon name="heroicons:chevron-down-20-solid" />
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
                  <Icon
                    v-if="option == currentOption"
                    name="heroicons:check-20-solid"
                  />
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>

      <div>
        <NuxtLink to="/requests/create" class="btn-primary space-x-2">
          <Icon name="heroicons:plus-20-solid" />
          <span>Add Feedback</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const requestStore = useRequestStore();
const { requests, sortOptions, currentOption } = storeToRefs(requestStore);
</script>
