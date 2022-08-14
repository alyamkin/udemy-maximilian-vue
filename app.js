const app = Vue.createApp({
  data() {
    return {
      inputStyleMe: "",
      styleMeVisible: true,
      inputStyleInline: "",
    };
  },
  computed: {
    styleMeClass() {
      return {
        user1: this.inputStyleMe === "user1",
        user2: this.inputStyleMe === "user2",
        visible: this.styleMeVisible,
        hidden: !this.styleMeVisible,
      };
    },
  },
  methods: {
    toggleStyleMeVisibility() {
      this.styleMeVisible = !this.styleMeVisible;
    },
  },
});

app.mount("#assignment");
