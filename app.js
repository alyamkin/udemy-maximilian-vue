const app = Vue.createApp({
  data() {
    return {
      name: "Andrey",
      age: 36,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Aldrin_Apollo_11_original.jpg/220px-Aldrin_Apollo_11_original.jpg",
    };
  },
  methods: {
    ageAdvanced(years) {
      return this.age + years;
    },

    favRandNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
