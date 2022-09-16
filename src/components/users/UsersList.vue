<template>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
  data() {
    return {
      savedChanges: false,
    };
  },
  components: {
    UserItem,
  },
  methods: {
    saveChanges() {
      this.savedChanges = true;
    },
  },
  inject: ["users"],
  beforeRouteEnter(to, from, next) {
    console.log("UsersList Cmp beforeRouteEnter");
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("UserList Cmp beforeRouteLeave");

    if (this.savedChanges) {
      next();
    } else {
      const userWantsToLeave = confirm(
        "Are you sure? You got unsaved changes!"
      );
      next(userWantsToLeave);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
