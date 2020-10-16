<template>
  <div class="login-form">
    <b-card title="User Login">
      <b-form>
        <b-alert variant="danger" v-bind:show="errorMessage.length > 0">{{
          errorMessage
        }}</b-alert>
        <EmailInput
          v-bind:id="'login-email'"
          v-bind:autocomplete="'username'"
          v-bind:submitted="validation.submitted"
          v-model="credentials.email"
          v-on:on-submit="onSubmit"
        >
        </EmailInput>
        <PasswordInput
          v-bind:minLength="validation.passMinLength"
          v-bind:autocomplete="'current-password'"
          v-bind:submitted="validation.submitted"
          v-model="credentials.password"
          v-on:on-submit="onSubmit"
        ></PasswordInput>
        <b-button variant="primary" v-on:click="onSubmit">Login</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
export default {
  name: "LoginForm",
  components: {
    PasswordInput,
    EmailInput
  },
  data: function() {
    return {
      validation: {
        emailReg: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        passMinLength: 3,
        submitted: false
      },
      credentials: {
        email: "",
        password: ""
      },
      errorMessage: ""
    };
  },
  computed: {
    isValid: function() {
      var vm = this;
      return (
        vm.validation.emailReg.test(vm.credentials.email) &&
        vm.credentials.password.length >= vm.validation.passMinLength
      );
    }
  },
  methods: {
    onSubmit: function() {
      var vm = this;
      vm.validation.submitted = true;
      if (vm.isValid) {
        vm.$store.dispatch("authentication/login", this.credentials).then(
          function() {
            if (vm.$route.query.redirect) {
              vm.$router.push(vm.$route.query.redirect);
            } else {
              vm.$router.push("/");
            }
          },
          function(err) {
            vm.errorMessage = err;
          }
        );
      }
    }
  }
};
</script>

<style lang="less" scoped>
</style>