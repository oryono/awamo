<template>
  <tr :style="styleObject">
    <td>{{result.number1}}</td>
    <td>{{result.number2}}</td>
    <td>{{result.response}}</td>
    <td>{{result.expected}}</td>
    <td v-if="result.pass">Yes</td>
    <td v-else>No</td>
    <td>
      <a href="#" @click.prevent="removeRow(index)">Remove</a>
    </td>
  </tr>
</template>

<script>
import EventBus from "../eventBus";
export default {
  data() {
    return {
      styleObject: {
        backgroundColor: "red"
      }
    };
  },

  mounted() {
    if (this.result.pass) {
      this.styleObject.backgroundColor = "green";
    }
  },

  methods: {
    removeRow: function(index) {
      EventBus.$emit("REMOVE_RESULT", index);
    }
  },

  props: ["result", "index"]
};
</script>

<style>
</style>
