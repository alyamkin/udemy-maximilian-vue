const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      //fullName: "",
    };
  },
  // watch: {
  //   name(value) {
  //     if (value === "") {
  //       this.fullName = "";
  //     } else {
  //       this.fullName = value + " " + "Lyamkin";
  //     }
  //   },
  // },
  watch: {
    counter(value) {
      if (value > 50) this.counter = 0;
    },
  },
  computed: {
    fullName() {
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
    outputFullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Lyamkin";
    },
  },
});

app.mount("#events");
