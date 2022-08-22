<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="userName">Name</label>
      <input type="text" ref="userName" />
    </div>
    <div>
      <label for="userAge">Age</label>
      <input type="text" ref="userAge" />
    </div>
    <button type="submit">Add user</button>
  </form>
</template>

<script>
export default {
  data() {
    return {};
  },
  emis: ["submt-data"],
  methods: {
    submitData() {
      const enteredData = {
        name: this.$refs.userName.value,
        age: this.$refs.userAge.value,
      };
      this.$emit("submit-data", enteredData);
    },
  },
};
</script>
