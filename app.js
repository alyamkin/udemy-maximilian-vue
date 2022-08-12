const app = Vue.createApp({
  data() {
    return {
      sumNum: 0,
    };
  },
  computed: {
    result() {
      if (this.sumNum < 37) {
        return "Not there yet";
      } else if (this.sumNum > 37) {
        return "Too much!";
      } else {
        return this.sumNum;
      }
    },
  },
  methods: {
    add(number) {
      this.sumNum += number;
    },
  },
  watch: {
    sumNum() {
      let that = this;
      setTimeout(() => {
        that.sumNum = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
