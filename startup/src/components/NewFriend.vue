<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" ref="friendName" />
    </div>
    <div>
      <label for="phone">Phone</label>
      <input type="tel" id="phone" ref="friendPhone" />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" ref="friendEmail" />
    </div>
    <button type="submit">Add contact</button>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {};
  },
  methods: {
    submitData() {
      const newContact = {
        name: this.$refs.friendName.value,
        phone: this.$refs.friendPhone.value,
        email: this.$refs.friendEmail.value,
      };
      this.$emit("add-contact", newContact);
      this.cleanInputs();
    },
    cleanInputs() {
      this.$refs.friendName.value = "";
      this.$refs.friendPhone.value = "";
      this.$refs.friendEmail.value = "";
    },
  },
};
</script>

<style>
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
