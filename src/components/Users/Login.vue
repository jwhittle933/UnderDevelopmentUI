<template>
  <div>
    <form @submit.prevent="login">
      <label class="login-label" for="email" required autofocus>E-Mail Address</label>
      <div>
        <input class="login-input" id="email" type="email" v-model="email" required>
      </div>

      <label class="login-label" for="password">Password</label>
      <div>
        <input class="login-input" id="password" type="password" v-model="password" required>
      </div>
    </form>
  </div>
</template>

<script>
export const Login = {
  name: 'Login',
}
export default Login
</script>

<style scoped>
.login-label {
  color: white;
}
.login-input {
  border-radius: 10%;
  box-shadow: 1px 1px 1px 1px black;
}
</style>

