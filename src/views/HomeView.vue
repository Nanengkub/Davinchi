<template>
  <div class="home">
    <img src="../assets/S__8364084.jpg" width="800" height="550">
  </div>
  <div class="col-sm-12">
  <button type="button" style="font-size:30px;" class="btn btn-warning" @click="start()">START</button>
</div>
</template>

<script>
export default {

  name: 'App',
  methods:{
    start(){
    localStorage.setItem("auth",false);
    this.$router.push({name:'q1'});
    }

  }
  }
</script>