<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="buttonMode('stored-resources')"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="buttonMode('add-resource')"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";
export default {
  data() {
    return {
      selectedTab: "stored-resources",
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official Vue.js documentation.",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to google...",
          link: "https://google.com",
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    buttonMode(tab) {
      return tab === this.selectedTab ? null : "flat";
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString,
        title: title,
        description: description,
        link: link,
      };
      this.storedResources.push(newResource);
      this.setSelectedTab("stored-resources");
    },
    deleteResource(id) {
      // this.storedResources = this.storedResources.filter((res) => {
      //   return res.id !== id;
      // });
      const resIndex = this.storedResources.findIndex((res) => res.id === id);
      this.storedResources.splice(resIndex, 1);
    },
  },
  components: {
    StoredResources,
    AddResource,
  },
};
</script>
