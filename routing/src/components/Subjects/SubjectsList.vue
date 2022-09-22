<template>
  <section>
    <ul>
      <subject-item
        v-for="subject in subjects"
        :key="subject.id"
        :id="subject.id"
        :title="subject.title"
        :description="subject.description"
      ></subject-item>
    </ul>
  </section>
</template>

<script>
import SubjectItem from "./SubjectItem.vue";

export default {
  inject: ["subjects"],

  components: {
    SubjectItem,
  },
};
</script>
