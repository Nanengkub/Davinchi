<template>
    <div class="ans2"  align="center">
      <h1>ข้อที่ 2</h1>
      <img src="../assets/way.jpg" width="450" height="300">
      <img src="../assets/chang.jpg" width="190"  height="300">
      <img src="../assets/taro.jpg" width="300" height="300">
      <h3>3 พยางค์</h3>
      <h2>เฉลย => ทางช้างเผือก</h2>
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
      this.$router.push({name:'q3'});
      }
  
    }
    }
  </script>