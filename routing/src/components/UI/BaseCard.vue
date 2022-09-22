<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  width: 50%;
  border: 1px solid #6419ad;
  margin: 1rem auto;
  padding: 1rem;
  max-width: 60%;
  box-shadow: 5px 5px 7px rgba(99, 25, 173, 0.2);
  border-radius: 10px;
  background-color: #fff;
}
</style>
