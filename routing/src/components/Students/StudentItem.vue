<template>
  <li>
    <base-card>
      <h3>{{ fullName }}</h3>
      <div class="contacts">
        <div>{{ email }}</div>
        <div>{{ phone }}</div>
      </div>
      <router-link :to="link">registered courses</router-link>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ["id", "fullName", "email", "phone"],

  computed: {
    link() {
      return `/students/${this.id}`;
    },
  },
};
</script>

<style scoped>
h3 {
  margin-bottom: 1rem;
}
.contacts {
  gap: 0.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  flex-direction: column;
  justify-content: center;
}
</style>
