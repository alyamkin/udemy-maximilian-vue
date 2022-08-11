const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },

  methods: {
    add(num) {
      this.counter += num;
    },

    subtract(num) {
      this.counter -= num;
    },

    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },

    submitForm() {
      alert("Hi");
    },

    confirmInput() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
