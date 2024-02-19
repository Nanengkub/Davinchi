<template>
    <div class="Q2"  align="center">
      <h1>ข้อที่ 2</h1>
      <img src="../assets/way.jpg" width="450" height="300">
      <img src="../assets/chang.jpg" width="190"  height="300">
      <img src="../assets/taro.jpg" width="300" height="300">
      <h3>3 พยางค์</h3>
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
      this.$router.push({name:'ans2'});
      }
  
    }
    }
  </script>
  