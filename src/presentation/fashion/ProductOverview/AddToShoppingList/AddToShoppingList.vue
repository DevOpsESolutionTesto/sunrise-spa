<i18n src="./AddToShoppingList.txt" lang="yaml"></i18n>
<script src="./AddToShoppingList.js"></script>

<template>
  <div v-if="error">
    Error:
    <pre>{{ JSON.stringify(error, undefined, 2) }}</pre>
  </div>
  <div
    class="product-details-area pt-50 pb-50"
    v-if="display"
  >
    <div class="custom-container-yolanda">
        Hello Testo~~
        <button @click.prevent="emitClose">Click me close</button>
    </div>
  </div>
</template>
