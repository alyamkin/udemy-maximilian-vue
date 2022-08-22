<template>
  <div>
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {};
  },
};
</script>
