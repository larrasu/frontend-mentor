<template>
  <div class="container">
    <Header
      :cart="cart"
      :show-cart="showCart"
      :toggle-cart="toggleCart"
      v-on:delete-item="deleteItem"
    />
    <main class="md:flex md:items-center gap-10 md:my-10 md:px-10 md:gap-24">
      <Lightbox />
      <div class="product">
        <p class="tag">Sneaker Company</p>
        <h1 class="title">Fall Limited Edition Sneakers</h1>
        <p class="desc">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div class="details">
          <div class="flex items-center gap-4">
            <div class="price">$125.00</div>
            <div class="disc">50%</div>
          </div>
          <div class="old">$250.00</div>
        </div>
        <div class="md:flex items-center gap-4">
          <div class="qty">
            <button @click="removeQty" class="transition hover:opacity-50">
              <span class="sr-only">Remove quantity</span>
              <img src="~/assets/images/icon-minus.svg" alt="Remove" />
            </button>
            <div>{{ qty }}</div>
            <button @click="addQty" class="transition hover:opacity-50">
              <span class="sr-only">Add quantity</span>
              <img src="~/assets/images/icon-plus.svg" alt="Add" />
            </button>
          </div>
          <button @click="addToCart" class="btn-icon btn-primary btn-glow mt-4">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                fill-rule="nonzero"
                class="fill-primary-200"
              />
            </svg>
            <div>Add to cart</div>
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const cart = ref(useLocalStorage("cart", []));
const qty = ref(0);
const showCart = ref(false);

function toggleCart() {
  showCart.value = !showCart.value;
}

function addToCart() {
  const item = {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    price: 125,
    qty: qty.value || 1,
  };

  const index = cart.value.findIndex((i) => i.id === item.id);

  if (index === -1) {
    cart.value.push(item);
  } else {
    cart.value[index].qty += item.qty;
  }

  qty.value = 0;
  showCart.value = true;
}

function addQty() {
  if (qty.value < 10) {
    qty.value++;
  }
}

function removeQty() {
  if (qty.value > 0) {
    qty.value--;
  }
}

function deleteItem(id) {
  const index = cart.value.findIndex((i) => i.id === id);
  cart.value.splice(index, 1);
}
</script>
