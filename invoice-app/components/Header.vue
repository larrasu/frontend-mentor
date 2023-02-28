<template>
  <header class="bg-[#373B53]">
    <div class="flex items-center justify-between">
      <div
        class="bg-primary-500 relative rounded-r-[20px] px-[22px] py-[23px] overflow-hidden"
      >
        <NuxtLink to="/" class="relative z-10">
          <img src="~/assets/images/logo.svg" alt="Logo" />
        </NuxtLink>
        <div
          class="bg-primary-400 absolute w-full h-full top-[35px] left-0 rounded-tl-[20px] z-0"
        ></div>
      </div>
      <div class="flex items-center divide-x divide-[#494E6E]">
        <div class="px-6 py-5">
          <button>
            <NuxtSvgIcon
              name="moon"
              :use-origin-size="true"
              class="fill-accent-300"
            />
          </button>
        </div>
        <div class="px-6 py-5">
          <img
            src="~/assets/images/image-avatar.jpg"
            alt="Avatar"
            class="w-8 rounded-full"
          />
        </div>
      </div>
    </div>
  </header>
</template>
