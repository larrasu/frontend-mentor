<template>
  <div class="flex flex-col justify-between min-h-screen w-full">
    <header>
      <Header :menu="menu" />
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer>
      <Footer :menu="menu" />
    </footer>
  </div>
</template>

<script setup>
const menu = [
  {
    name: "Home",
    link: "/",
    img: "",
    size: "",
  },
  {
    name: "Headphones",
    link: "/headphones",
    img: "/images/image-category-thumbnail-headphones.png",
    size: "w-[80px] w-[104px]",
  },
  {
    name: "Speakers",
    link: "/speakers",
    img: "/images/image-category-thumbnail-speakers.png",
    size: "w-[84px] w-[101px]",
  },
  {
    name: "Earphones",
    link: "/earphones",
    img: "/images/image-category-thumbnail-earphones.png",
    size: "w-[103px] w-[104px]",
  },
];
</script>
