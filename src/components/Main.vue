<template>
  <main class="main">
    <h3>Results</h3>
    <table>
      <thead>
        <th>Number 1</th>
        <th>Number 2</th>
        <th>Response</th>
        <th>Expected</th>
        <th>Passed</th>
        <th>Remove</th>
      </thead>
      <tbody>
        <tr v-for="(result, index) in results" :key="index">
          <td>{{result.number1}}</td>
          <td>{{result.number2}}</td>
          <td>{{result.response}}</td>
          <td>{{result.expected}}</td>
          <td v-if="result.pass">PASSED</td>
          <td v-else>FAILED</td>
          <td>
            <button style="color: white">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import EventBus from "../eventBus";
export default {
  data() {
    return {
      results: [],
      styleObject: {}
    };
  },

  mounted() {
    EventBus.$on("RESULT", result => {
      console.log("RESULT", result);
      this.results.push(result);
    });
  }
};
</script>

<style>
</style>
