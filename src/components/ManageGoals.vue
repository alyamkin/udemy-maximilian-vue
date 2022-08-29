<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="addGoal">Add goal</button>
    <teleport to="body">
      <error-modal v-if="inputIsInvalud">
        <h2>Error input</h2>
        <p>The goal input should not be empty</p>
        <button @click="confirmError">OK</button>
      </error-modal>
    </teleport>
  </div>
</template>

<script>
import ErrorModal from "./ErrorModal.vue";

export default {
  components: {
    ErrorModal,
  },
  data() {
    return {
      inputIsInvalud: false,
    };
  },
  methods: {
    addGoal() {
      const inputNewGoal = this.$refs.goal.value;
      if (inputNewGoal === "") {
        this.inputIsInvalud = true;
      }
    },
    confirmError() {
      this.inputIsInvalud = false;
    },
  },
};
</script>
