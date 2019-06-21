<template>
  <div class="login-form">
    <form @submit.prevent="login">
      <label class="login-label" for="username" required autofocus>Username</label>
      <div>
        <input class="login-input" id="username" type="username" v-model="username" required>
      </div>

      <label class="login-label" for="password">Password</label>
      <div>
        <input class="login-input" id="password" type="password" v-model="password" required>
      </div>
      <div class="submit" @click="loginUser(username, password)">Submit</div>
    </form>
  </div>
</template>

<script>
export const Login = {
  name: 'Login',
  methods: {
    loginUser: function(u, p) {
      // login logic
    },
  },
}
export default Login
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  justify-items: space-between;
  align-items: center;
}
.login-label {
  color: white;
}
.login-input {
  border-radius: 10%;
  box-shadow: 1px 1px 1px 1px black;
}
.submit {
  margin: 0.5em auto 0;
  color: white;
  background-color: black;
  height: 30px;
  width: 65px;
  cursor: pointer;
}
</style>
