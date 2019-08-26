<template>
  <div class="side-bar">
    <div class="form-group">
      <label for="first">Number 1</label>
      <div v-if="!$v.first.required" class="error">First Number is required</div>
      <input type="text" v-model="first" placeholder="Enter number one" class="form-control" />
    </div>

    <div class="form-group">
      <label for="second">Number 2</label>
      <div v-if="!$v.second.required" class="error">Second Number is required</div>
      <input type="text" v-model="second" placeholder="Enter number two" class="form-control" />
    </div>

    <div class="form-group">
      <label for="operation">Operation</label>
      <select type="text" v-model="operation" class="form-control">
        <option value="+">ADD</option>
        <option value="-">SUB</option>
        <option value="/">DIV</option>
        <option value="*">MUL</option>
      </select>
    </div>

    <button @click="submitData" :disabled="$v.first.$invalid || $v.second.$invalid">Post</button>
  </div>
</template>

<script>
import axios from "axios";
import uuid from "uuid/v1";
import { required } from "vuelidate/lib/validators";
import EventBus from "../eventBus";
export default {
  data() {
    return {
      first: "",
      second: "",
      operation: "+"
    };
  },

  validations: {
    first: {
      required
    },
    second: {
      required
    }
  },

  methods: {
    async submitData() {
      let expression = `${this.first} ${this.operation} ${this.second}`;

      try {
      } catch (error) {}

      try {
      } catch (error) {}
      let { data } = await axios.post("http://api.mathjs.org/v4/", {
        expr: expression,
        precision: 14
      });

      let result;

      let randomNumber = Math.round(Math.random());

      if (randomNumber === 1) {
        randomNumber = Math.ceil(Math.random() * 4000);
        result = {
          id: uuid(),
          number1: this.first,
          number2: this.second,
          response: randomNumber,
          expected: data.result,
          pass: false
        };
      } else {
        result = {
          id: uuid(),
          number1: this.first,
          number2: this.second,
          response: data.result,
          expected: data.result,
          pass: true
        };
      }

      EventBus.$emit("RESULT", result);
    }
  }
};
</script>

<style>
input {
  box-sizing: border-box;
}

.form-control {
  width: 100%;
  margin: 10px 0px 20px 0px;
  padding: 10px;
  background-color: transparent;
  border: #ba9313 solid 1px;
  border-radius: 15px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #ba9313;
  border-radius: 15px;
}

.error {
  color: red;
}
</style>
