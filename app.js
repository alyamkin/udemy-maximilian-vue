const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: "",
      showList: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },
    showHideList() {
      this.showList = !this.showList;
    },
  },
});

app.mount("#assignment");
