<template>
    <div class="Q3"  align="center">
      <h1>ข้อที่ 3  จงทายคำจากภาพที่กำหนดให้</h1>
      <img src="../assets/temple.jpg" width="400" height="300">
      <img src="../assets/blackback.jpg" width="400"  height="300">
      <img src="../assets/snake.jpg" width="400" height="300">
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
      this.$router.push({name:'ans3'});
      }
  
    }
    }
  </script>
  