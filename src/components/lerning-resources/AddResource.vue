<template>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" ref="inputTitle" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          rows="3"
          name="description"
          id="description"
          ref="inputDescription"
        />
      </div>
      <div class="form-control">
        <label for="Linl">Link</label>
        <input type="url" name="link" id="link" ref="inputLink" />
      </div>
      <div>
        <base-button type="submit">Add Resources</base-button>
      </div>
    </form>
  </base-card>
  <base-modal-dialog
    v-if="isFormInvalid"
    title="Invalid Input"
    @close="closeModal"
  >
    <template v-slot:default>
      <p>Unfortunately, one of the value is invalid</p>
    </template>
    <template v-slot:actions>
      <base-button @click="closeModal">OK</base-button>
    </template>
  </base-modal-dialog>
</template>

<script>
export default {
  data() {
    return {
      isFormInvalid: false,
    };
  },
  emits: ["updateResources"],
  inject: ["addResource"],
  methods: {
    submitData() {
      const userTitle = this.$refs.inputTitle.value;
      const userDescription = this.$refs.inputDescription.value;
      const userLink = this.$refs.inputLink.value;

      this.validateInputs(userTitle, userDescription, userLink);

      if (this.isFormInvalid) {
        return;
      }
      this.addResource(userTitle, userDescription, userLink);
      this.cleanForm();
    },
    validateInputs(userTitle, userDescription, userLink) {
      if (
        userTitle.trim() === "" ||
        userDescription.trim() === "" ||
        userLink.trim() === ""
      ) {
        this.isFormInvalid = true;
      }
    },
    closeModal() {
      this.isFormInvalid = false;
    },
    cleanForm() {
      this.$refs.inputTitle.value = "";
      this.$refs.inputDescription.value = "";
      this.$refs.inputLink.value = "";
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
