<template>
  <section>
    <ul>
      <student-item
        v-for="student in students"
        :key="student.id"
        :id="student.id"
        :fullName="student.fullName"
        :phone="student.phone"
        :email="student.email"
      ></student-item>
    </ul>
  </section>
</template>

<script>
import StudentItem from "./StudentItem.vue";

export default {
  inject: ["students"],

  components: {
    StudentItem,
  },
};
</script>
