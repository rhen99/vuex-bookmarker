<template>
  <div id="app">
    <Header/>

    <div class="container">
      <div class="col-md-12">
        <List/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import List from "./components/List";

export default {
  name: "app",
  components: {
    Header,
    List
  }
};
</script>

<style>
#app {
}
</style>
