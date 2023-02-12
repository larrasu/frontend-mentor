<script setup>
const mainStore = useMainStore();
const userStore = useUserStore();

const categories = computed(() => mainStore.getCategories);
const currentCategory = computed(() => mainStore.getCurrentCategory);
const users = computed(() => userStore.getUsers);
const currentUser = computed(() => userStore.getCurrentUser);
</script>

<template>
  <div class="bg-base-100 h-screen w-[271px] absolute z-20 top-0 right-0">
    <div class="flex flex-col gap-4 p-6">
      <div class="rounded-base p-6 bg-white">
        <div class="flex flex-wrap gap-2">
          <button
            v-for="category of categories"
            @click="mainStore.setCurrentCategory(category)"
            class="btn-plain text-[13px]"
            :class="{
              'text-base-100 bg-secondary-200': category === currentCategory,
            }"
          >
            <p>{{ category }}</p>
          </button>
        </div>
      </div>
      <div class="rounded-base p-6 bg-white">
        <div class="flex items-center justify-between">
          <h2
            class="text-accent-200 text-[18px] font-bold leading-[26.01px] tracking-[-0.25px]"
          >
            Roadmap
          </h2>
          <NuxtLink to="/roadmap" class="link">View</NuxtLink>
        </div>
      </div>
      <div class="bg-white text-accent-100 rounded-base p-6 text-[13px]">
        <p class="mb-2 text-base">Logged in as</p>
        <Menu as="div" class="relative">
          <MenuButton
            class="bg-base-100 rounded-base flex items-center w-full gap-2 p-2"
          >
            <img
              :src="currentUser.image"
              :alt="`${currentUser.name}'s avatar'`"
              class="w-8 rounded-full"
            />
            <p>{{ currentUser.name }}</p>
            <Icon
              name="heroicons:chevron-up-down-20-solid"
              class="w-5 h-5 ml-auto"
            />
          </MenuButton>

          <MenuItems class="shadow-base rounded-base absolute mt-4 bg-white">
            <div class="max-h-48 flex flex-wrap h-full overflow-auto">
              <MenuItem v-for="user of users" :key="user.username">
                <button
                  @click="userStore.setCurrentUser(user)"
                  class="flex items-center gap-2 px-4 py-3"
                  :class="{
                    'text-primary-200': user.username == currentUser.username,
                  }"
                >
                  <img
                    :src="user.image"
                    :alt="`${user.name}'s avatar'`"
                    class="w-8 rounded-full"
                  />
                  <p>{{ user.name }}</p>
                  <Icon
                    v-if="user.username == currentUser.username"
                    name="heroicons:check-20-solid"
                    class="w-5 h-5 ml-auto"
                  />
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>
    </div>
  </div>
</template>
