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
        <result-row
          v-for="(result, index) in results"
          :key="result.id"
          :result="result"
          :index="index"
        ></result-row>
      </tbody>
    </table>
  </main>
</template>

<script>
import EventBus from "../eventBus";
import resultRow from "../components/resultRow";
export default {
  components: {
    resultRow
  },
  data() {
    return {
      results: [],
      styleObject: {
        backgroundColor: "red"
      }
    };
  },

  mounted() {
    EventBus.$on("REMOVE_RESULT", index => {
      console.log("Removing shit", index);
      this.results.splice(index, 1);
    });

    EventBus.$on("RESULT", result => {
      this.results.push(result);
    });
  },

  methods: {
    setRowColor: function(result) {
      if (result.pass) {
        this.styleObject.backgroundColor = "green";
      } else {
        this.styleObject.backgroundColor = "red";
      }
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
}

table tr {
  border-bottom: solid 1px black;
}

table thead {
  background-color: black;
  color: burlywood;
  border: none;
  padding: 10px;
}

table td,
th {
  padding: 10px;
  border: none;
}
</style>
