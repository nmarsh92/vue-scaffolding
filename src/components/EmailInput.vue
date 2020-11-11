<template>
  <b-form-group label="Email Address" v-bind:label-for="id">
    <b-form-input
      v-bind:id="id"
      type="email"
      placeholder="Enter email"
      v-model="email"
      v-bind:autocomplete="autocomplete"
      v-on:keyup.enter="$emit('on-submit')"
      v-on:blur="onBlur"
      v-on:input="$emit('input', email)"
      v-bind:state="state"
    ></b-form-input>
    <b-form-invalid-feedback>Please enter valid email.</b-form-invalid-feedback>
  </b-form-group>
</template>

<script>
export default {
  name: "EmailInput",
  props: ["id", "autocomplete", "submitted"],
  data: function() {
    return {
      email: "",
      check: false,
      regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    };
  },
  computed: {
    state: function() {
      if (!this.check && !this.submitted) return null;
      return this.regex.test(this.email);
    }
  },
  methods: {
    onBlur: function() {
      this.check = true;
    }
  }
};
</script>

<style></style>