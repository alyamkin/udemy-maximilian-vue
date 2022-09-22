import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import StudentsList from "./components/Students/StudentsList.vue";
import SubjectsList from "./components/Subjects/SubjectsList.vue";
import RegisteredCourses from "./components/Students/RegisteredCourses.vue";
import NotFound from "./components/Layouts/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/students" },
    { path: "/students", component: StudentsList },
    { path: "/students/:studentId", component: RegisteredCourses, props: true },
    { path: "/subjects", component: SubjectsList },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

const app = createApp(App);
app.use(router);
app.component("base-card", BaseCard);

app.mount("#app");
