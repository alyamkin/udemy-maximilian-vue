<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">
      {{ areDetailsVisible ? "Hide Details" : "Show Details" }}
    </button>
    <ul v-if="areDetailsVisible">
      <li><strong>Name: </strong>{{ friend.name }}</li>
      <li><strong>Phone: </strong>{{ friend.phone }}</li>
      <li><strong>Email: </strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      areDetailsVisible: false,
      friend: {
        id: "andrey",
        name: "Andrey Lyamkin",
        phone: "514 245 3355",
        email: "andrey@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.areDetailsVisible = !this.areDetailsVisible;
    },
  },
};
</script>
