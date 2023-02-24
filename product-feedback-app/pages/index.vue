<template>
  <div class="flex">
    <Sidebar />
    <section>
      <Header />
      <main>
        <RequestCard v-for="request of requests" :request="request" />
      </main>
    </section>
  </div>
</template>

<script setup>
const requestStore = useRequestStore();
const { requests } = storeToRefs(requestStore);

await useAsyncData(async () => {
  await requestStore.fetchRequests();
});
</script>
