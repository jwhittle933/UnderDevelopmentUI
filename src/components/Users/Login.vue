<template>
  <div>
    <h2>Log In</h2>
    <form @submit.prevent="login">
      <label for="email" required autofocus>E-Mail Address</label>
      <div>
        <input id="email" type="email" v-model="email" required>
      </div>

      <label for="password">Password</label>
      <div>
        <input id="password" type="password" v-model="password" required>
      </div>
    </form>
  </div>
</template>

<script>
export const Login = {
  name: 'Header',
}
export default Login
</script>

<style scoped>
</style>

