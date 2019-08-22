<template>
  <div id="app">
    <div class="container">
      <SideBar></SideBar>
      <Main></Main>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar";
import Main from "./components/Main";

export default {
  name: "app",
  components: {
    SideBar,
    Main
  }
};
</script>

<style>
.container {
  overflow: auto;
  width: 100%;
}

.side-bar,
.main {
  height: 100%;
  padding: 20px;
}

.side-bar {
  background-color: #28353e;
  width: 25%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
}

.main {
  width: 75%;
  background-color: #fef9e4;
  float: left;
  position: fixed;
  left: 25%;
  top: 0;
  padding-left: 50px;
}
</style>
