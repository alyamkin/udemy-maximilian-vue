<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/students">Students</router-link>
        </li>
        <li>
          <router-link to="/subjects">Subjects</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  height: 5rem;
  background-color: #6419ad;
}

nav {
  height: inherit;
}

ul {
  gap: 2rem;
  height: inherit;
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
}

a {
  color: #fff;
  border: 1px solid #6419ad;
  padding: 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;
  text-decoration: none;
}

a:hover,
a:active {
  border: 1px solid #8d61b9;
  background-color: #8848c7;
}
</style>
