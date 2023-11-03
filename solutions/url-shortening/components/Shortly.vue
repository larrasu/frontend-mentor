<script setup lang="ts"></script>
<template>
  <!-- TODO: add function -->
  <div
    class="bg-gradient-to-b from-white from-50% to-gray to-50% px-6 py-20"
  >
    <div
      class="bg-violet-dark bg-shorten-mobile bg-no-repeat bg-right-top rounded-[10px]"
    >
      <div class="grid gap-4 p-6">
        <input
          type="text"
          name="url"
          id="url"
          placeholder="Shorten a link here..."
          class="rounded-[5px] text-base/9 tracking-[0.12px]"
        />
        <Button label="Shorten It!" rounded="base" />
      </div>
    </div>
  </div>
</template>
