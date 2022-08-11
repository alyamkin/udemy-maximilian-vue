const app = Vue.createApp({
  data() {
    return {
      firstInput: "",
      secondInput: "",
    };
  },

  methods: {
    showAlert() {
      alert("Alert message");
    },

    inputKeydown(event) {
      this.firstInput = event.target.value;
    },

    inputRegistered(event) {
      this.secondInput = event.target.value;
    },
  },
});

app.mount("#assignment");
