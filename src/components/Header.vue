<template>
  <header>
    <nav class="navbar navbar-dark bg-info">
      <a class="navbar-brand" href="#">{{title}}</a>
    </nav>
  </header>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapState(["title"])
  }
};
</script>
<style>
header {
  margin-bottom: 20px;
}
</style>
