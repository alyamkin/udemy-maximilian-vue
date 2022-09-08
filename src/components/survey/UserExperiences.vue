<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="getSurveys"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading" class="loading">Surveys are loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isloading && (!results || results.length === 0)">
        No data
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from "./SurveyResult.vue";

export default {
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  components: {
    SurveyResult,
  },
  methods: {
    getSurveys() {
      this.isLoading = true;
      fetch(
        "https://vue-http-demo-ce41c-default-rtdb.firebaseio.com/surveys.json"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          this.error = null;
          const surveys = [];
          for (const id in data) {
            surveys.push({
              id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = surveys;
        })
        .catch((error) => {
          this.isLoading = false;
          this.error =
            "Something wrong with fetch data. Please try again later: " + error;
        });
    },
  },
  mounted() {
    this.getSurveys();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.loading {
  font-size: 1.5rem;
}
</style>
