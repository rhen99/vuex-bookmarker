<template>
  <div>
    <form @submit.prevent="addLink">
      <div class="form-group">
        <input type="text" class="form-control" v-model="newLink" placeholder="Add Link">
      </div>
    </form>
    <p>
      You currently have
      <strong>{{countLinks}}</strong>
      links bookmarked.
    </p>
    <ul class="list-group" v-bind:key="index" v-for="(link, index) in links">
      <a v-bind:href="link" class="list-group-item list-group-item-action">
        {{link}}
        <button
          class="btn btn-danger btn-sm float-right"
          v-on:click="removeLink(index)"
        >Remove</button>
      </a>
    </ul>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "List",
  data() {
    return {
      newLink: ""
    };
  },
  methods: {
    ...mapMutations(["ADD_LINK", "REMOVE_LINK"]),
    ...mapActions(["removeLinks"]),
    addLink() {
      this.ADD_LINK(this.newLink);
      this.newLink = "";
    },
    removeLink(link) {
      this.removeLinks(link);
    }
  },
  computed: {
    ...mapState(["links"]),
    ...mapGetters(["countLinks"])
  }
};
</script>
<style>
</style>
