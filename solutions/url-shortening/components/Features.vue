<script setup lang="ts">
const features = [
  {
    icon: 'icon-brand-recognition',
    title: 'Brand Recognition',
    desc: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
  },
  {
    icon: 'icon-detailed-records',
    title: 'Detailed Records',
    desc: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
  },
  {
    icon: 'icon-fully-customizable',
    title: 'Fully Customizable',
    desc: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
  }
];
</script>
<template>
  <!-- TODO: wip -->
  <div class="bg-gray text-center px-6">
    <div>
      <h2 class="text-dark text-[28px]/[48px] tracking-[-0.7px] font-bold">
        Advanced Statistics
      </h2>
      <p class="mt-4 text-gray-dark text-base/7 tracking-[-0.109px]">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
    </div>
    <div class="py-20 space-y-20">
      <div
        v-for="(feature, index) of features"
        :key="index"
        class="relative bg-white rounded-[5px] flex flex-col items-center text-center px-8 py-10"
      >
        <div
          class="absolute -top-20 w-2 h-10 bg-primary"
          :class="{ hidden: index === 0 }"
        />
        <div
          class="absolute -top-10 left-1/2 -translate-x-1/2 bg-violet-dark w-[88px] h-[88px] rounded-full flex items-center justify-center"
        >
          <img :src="`/images/${feature.icon}.svg`" :alt="feature.title" />
        </div>
        <h3 class="mt-[33px] text-dark text-[22px] font-bold">
          {{ feature.title }}
        </h3>
        <p class="mt-3 text-gray-dark">{{ feature.desc }}</p>
      </div>
    </div>
  </div>
</template>
