<template>
  <div class="lg:flex-row md:mx-10 md:mt-14 flex flex-col">
    <Sidebar />
    <section class="md:mt-10">
      <Header />
      <main class="md:mt-6 grid gap-4">
        <RequestCard
          v-for="request of sortedRequests"
          :key="request.id"
          :request="request"
          :is-link="true"
        />
      </main>
    </section>
  </div>
</template>

<script setup>
const requestStore = useRequestStore();
const userStore = useUserStore();
const { requests, sortedRequests } = storeToRefs(requestStore);

if (!requests.value.length) {
  requestStore.fetchRequests();
  userStore.fetchUsers();
  userStore.fetchCurrentUser();
}
</script>
