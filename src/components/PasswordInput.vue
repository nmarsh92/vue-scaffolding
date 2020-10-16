<template>
  <b-form-group label="Password" label-for="login-form-password">
    <b-form-input
      id="login-form-password"
      type="password"
      placeholder="Enter Password"
      v-bind:autocomplete="autocomplete"
      v-model="password"
      v-on:keyup.enter="$emit('on-submit')"
      v-on:blur="onBlur"
      v-on:input="$emit('input', password)"
      v-bind:state="state"
    ></b-form-input>
    <b-form-invalid-feedback
      >Password must be minimum
      {{ minLength }} characters.</b-form-invalid-feedback
    >
  </b-form-group>
</template>
<script>
export default {
  name: "PasswordInput",
  props: ["minLength", "autocomplete", "submitted"],
  data: function() {
    return {
      password: "",
      check: false
    };
  },
  computed: {
    state: function() {
      if (!this.check && !this.submitted) return null;
      return this.password.length >= this.minLength;
    }
  },
  methods: {
    onBlur: function() {
      this.check = true;
    }
  }
};
</script>