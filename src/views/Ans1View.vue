<template>
    <div class="ans1"  align="center">
      <h1>ข้อที่ 1</h1>
      <img src="../assets/new.jpg" width="250" height="350" align="center">
      <img src="../assets/clear.jpg" width="150" height="150" align="center">
      <h3>2 พยางค์</h3>
      <h2>เฉลย => นิวเคลียร์</h2>
    </div>
    <div class="col-sm-12">
      <button type="button" style="font-size:30px; position: relative; bottom: 0cm; right: 0;" class="btn btn-warning" @click="next()">NEXT</button>
    </div>
  </template>
  
  <script>
  export default {
  
    name: 'App',
    methods:{
      next(){
      localStorage.setItem("auth",false);
      this.$router.push({name:'q2'});
      }
  
    }
    }
  </script>