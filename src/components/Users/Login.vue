<template>
  <div class="Login">
    <div class="Login-form">
      <p class="Login-text">_D | Login</p>
      <input class="Login-input" />
      <input class="Login-input" />
    </div>
  </div>
</template>

<script>
export const Login = {
  name: 'Login',
}

export default Login
</script>

<style>
.Login {
  height: 35em;
  width: 30em;
  margin: 10em auto;
  background-color: #2c3e50;
  /* padding: 1em; */
  border-radius: 4px;
}

.Login-text {
  font-size: 3em;
  font-family: Nunito;
  color: white;
}

.Login-form {
  width: 100%;
  height: 75%;
  margin: 3em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.Login-input {
  display: block;
  height: 2em;
  width: 75%;
  border: 2px solid #eee;
  border-radius: 4px;
  outline: none;
  font-size: 1.2em;
}
</style>
