<template>
  <div class="core-navbar">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item
          v-for="tab in leftTabs"
          v-bind:key="tab.id"
          v-bind:to="tab.to"
          v-bind:active="tab.active"
          v-on:click="selectTab(tab)"
          >{{ tab.title }}</b-nav-item
        >
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          v-for="tab in rightTabs"
          v-bind:key="tab.id"
          v-bind:to="tab.to"
          v-bind:active="tab.active"
          v-on:click="selectTab(tab)"
          >{{ tab.title }}</b-nav-item
        >
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "ViewNavBar",
  props: {},
  computed: {
    leftTabs: function() {
      return this.$store.getters["navigation/leftTabs"];
    },
    rightTabs: function() {
      return this.$store.getters["navigation/rightTabs"];
    }
  },
  methods: {
    selectTab: function(selectedTab) {
      this.$store.dispatch("navigation/selectPage", selectedTab.id);
    }
  }
};
</script>

<style scoped lang="less">
.core-navbar {
  margin-bottom: 15px;
}
</style>