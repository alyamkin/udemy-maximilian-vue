import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseModalDialog from "./components/UI/BaseModalDialog.vue";

const app = createApp(App);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-modal-dialog", BaseModalDialog);
app.mount("#app");
