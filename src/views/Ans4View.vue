<template>
    <div class="ans1"  align="center">
      <h1>ข้อที่ 4</h1>
      <img src="../assets/actor.jpg" width="500" height="300">
      <img src="../assets/songkran.jpg" width="400"  height="300">
      <h3>3 พยางค์</h3>
      <h2>เฉลย => ดาราศาสตร์</h2>
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
      this.$router.push({name:'q5'});
      }
  
    }
    }
  </script>