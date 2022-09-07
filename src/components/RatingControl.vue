<template>
  <h2>Rating control</h2>
  <ul>
    <li :class="{ active: modelValue === 'poor' }">
      <button type="button" @click="setActiveOption('poor')">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'average' }">
      <button type="button" @click="setActiveOption('average')">Average</button>
    </li>
    <li :class="{ active: modelValue === 'great' }">
      <button type="button" @click="setActiveOption('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {
      activeOption: null,
    };
  },
  methods: {
    setActiveOption(option) {
      this.$emit("update:modelValue", option);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}
li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  border: none;
  cursor: pointer;
  background: transparent;
  font: inherit;
}
.active {
  border-color: salmon;
}
.active button {
  color: salmon;
}
</style>
