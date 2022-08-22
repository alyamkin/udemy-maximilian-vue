<template>
  <div>
    <h2>Users</h2>
    <active-user
      v-for="user in users"
      :key="user.id"
      :user="user"
    ></active-user>
    <user-data @submit-data="addNewUser"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: "user1",
          name: "Andrey",
          age: "36",
        },
        {
          id: "user1",
          name: "Sergey",
          age: "65",
        },
      ],
    };
  },
  methods: {
    addNewUser(user) {
      const newUser = {
        id: new Date().toISOString(),
        ...user,
      };
      this.users.push(newUser);
    },
  },
};
</script>
