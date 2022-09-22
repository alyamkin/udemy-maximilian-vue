<template>
  <div>
    <nav-header></nav-header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavHeader from "./components/Layouts/Navigation/NavHeader.vue";

export default {
  data() {
    return {
      subjects: [
        {
          id: "s1",
          title: "mathematics stage 1",
          description:
            "This course provide solid mathemtic foundation. The students will learn core concepts requered for upcoming courses.",
        },
        {
          id: "s2",
          title: "literature",
          description: "Students will learn most popular classic writers.",
        },
        {
          id: "s3",
          title: "software development stage 1",
          description:
            "Students will learn basic principles OOP and main programming patterns.",
        },
        {
          id: "s4",
          title: "QA testing",
          description: "Students will learn the basics of software testing.",
        },
      ],

      students: [
        {
          id: "st1",
          fullName: "Andrey Lyamkin",
          email: "andrey@gmail.com",
          phone: "555-555-55-55",
          subjects: ["s1", "s3"],
        },
        {
          id: "st2",
          fullName: "Golovatskaya Yana",
          email: "yana@gmail.com",
          phone: "777-777-77-77",
          subjects: ["s2", "s4"],
        },
        {
          id: "st3",
          fullName: "Sergey Lyamkin",
          email: "sergey@gmail.com",
          phone: "888-888-88-88",
          subjects: ["s1", "s2", "s3", "s4"],
        },
      ],

      activeComponent: "students-list",
    };
  },

  components: {
    NavHeader,
  },

  provide() {
    return {
      students: this.students,
      subjects: this.subjects,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Roboto:wght@400;500;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: Roboto, sans-serif;
}

btn {
}
</style>
