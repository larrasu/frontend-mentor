<template>
  <footer aria-label="Site Footer" class="bg-[#232127] text-[#BFBFBF]">
    <div class="py-14">
      <div class="grid gap-10 text-center">
        <div>
          <nuxt-svg-icon
            name="logo"
            class="fill-white"
            :use-origin-size="true"
          />
        </div>
        <div v-for="group of links">
          <p class="font-bold text-white text-base tracking-[-0.25px]">
            {{ group.name }}
          </p>
          <ul class="text-[15px] tracking-[-0.23px] space-y-[10px] mt-[22px]">
            <li v-for="item of group.items">
              <NuxtLink to="/">{{ item }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="mx-auto">
          <ul class="flex items-center gap-6">
            <li v-for="item of socials">
              <NuxtLink to="/"
                ><NuxtSvgIcon
                  :name="item"
                  :use-origin-size="true"
                  class="fill-white"
              /></NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const links = [
  {
    name: "Features",
    items: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    name: "Resources",
    items: ["Blog", "Developers", "Support"],
  },
  {
    name: "Company",
    items: ["About", "Our Team", "Careers", "Contact"],
  },
];
const socials = ["facebook", "twitter", "pinterest", "instagram"];
</script>
