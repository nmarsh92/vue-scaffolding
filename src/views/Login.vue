<template>
  <div class="login">
    <b-row>
      <b-col></b-col>
      <b-col cols="8"><LoginForm></LoginForm></b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
export default {
  name: 'Login',
  components: {
    LoginForm
  }
};
</script>

<style scoped lang="less"></style>
