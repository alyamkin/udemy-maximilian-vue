<template>
  <li>
    <base-card>
      <h3>{{ title }}</h3>
      <div>
        {{ description }}
      </div>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ["id", "title", "description"],
};
</script>

<style scoped>
h3 {
  margin-bottom: 1rem;
}
</style>
