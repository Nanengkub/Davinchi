<template>
    <div class="Q2"  align="center">
      <h1>ข้อที่ 5</h1>
      <img src="../assets/pilot.jpg" width="500" height="300">
      <img src="../assets/sky.jpg" width="400"  height="300">
      <h3>5 พยางค์</h3>
    </div>
    <div class="col-sm-12">
      <button type="button" style="font-size:30px;" class="btn btn-warning" @click="check()">CHECK!</button>
    </div>
  </template>
  
  <script>
  export default {
  
    name: 'App',
    methods:{
      check(){
      localStorage.setItem("auth",false);
      this.$router.push({name:'ans5'});
      }
  
    }
    }
  </script>
  