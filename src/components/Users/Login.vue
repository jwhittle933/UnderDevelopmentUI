<template>
  <div
    class="Login-page"
    :style="{
      background: 'left / contain url(' + image + ')',
    }"
  >
    <div class="Login">
      <div class="Login-form">
        <p class="Login-text">_D | Login</p>
        <label class="Login-label">email </label>
        <input
          class="Login-input"
          :class="{ focus: emailFocus }"
          @focus="focus"
        />
        <label class="Login-label">password </label>
        <input class="Login-input" @focus="focus" />
      </div>
    </div>
  </div>
</template>

<script>
export const Login = {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      emailFocus: false,
      passFocus: false,
      image: require('@/assets/latin2.jpg'),
    }
  },
  methods: {
    focus: function() {
      console.log('an element has been focused')
    },
  },
}

export default Login
</script>
<style>
@keyframes slide {
  0% {
    transform: translateX(-5em);
  }
  100% {
    transform: translateX(0);
  }
}

.Login {
  height: 35em;
  width: 30em;
  margin: 10em auto;
  background-color: #2c3e50;
  border-radius: 5px;
  /* animation: slide 0.1s linear; */
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
  justify-content: space-evenly;
}

.Login-label {
  width: 75%;
  color: white;
  text-align: left;
  font-size: 1.2em;
  margin: 0;
  z-index: 2;
}

.Login-input {
  display: block;
  height: 2em;
  width: 75%;
  padding-left: 0.5em;
  border: 2px solid #eee;
  border-radius: 4px;
  outline: none;
  font-size: 1.2em;
}
</style>
