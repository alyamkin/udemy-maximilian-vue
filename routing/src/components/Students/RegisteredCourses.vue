<template>
  <section>
    <ul>
      <subject-item
        v-for="subject in registeredSubjects"
        :key="subject.id"
        :id="subject.id"
        :title="subject.title"
        :description="subject.description"
      ></subject-item>
    </ul>
  </section>
</template>

<script>
import SubjectItem from "../Subjects/SubjectItem.vue";
export default {
  props: ["studentId"],
  data() {
    return {
      registeredSubjects: null,
    };
  },
  components: { SubjectItem },
  inject: ["students", "subjects"],
  methods: {
    loadSubjects(studentId) {
      const selectedStudent = this.students.find(
        (student) => student.id === studentId
      );
      const selectedSubjects = [];
      selectedStudent.subjects.forEach((subjectId) => {
        const selectedSubject = this.subjects.find(
          (subject) => subject.id === subjectId
        );
        if (selectedSubject) {
          selectedSubjects.push(selectedSubject);
        }
      });
      this.registeredSubjects = selectedSubjects;
    },
  },
  mounted() {
    this.loadSubjects(this.studentId);
  },
};
</script>
