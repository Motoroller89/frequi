<template>
  <div class="home">
    <div class="d-flex justify-content-center">
      <bot-list />
    </div>
    <hr />
    <!-- <img alt="Freqtrade logo" src="../assets/Frame-4939.png" width="450px" class="my-5" /> -->
    <div title="Freqtrade logo" class="logo-svg my-5 mx-auto" />
    <div>
      <h1>Welcome to the ALAI UI</h1>
    </div>
    <div></div>
    <br />
    <p>
    </p>

    <p></p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.home {
  margin-top: 1.5em;
}
.logo-svg {
  -webkit-mask: url(../assets/2.png) no-repeat center;
  -webkit-mask-size: 240px 240px;
  mask: url(../assets/2.png) no-repeat center;
  mask-size: contain;
  width: 250px;
  height: 250px;
}
</style>
