<template>
  <div class="Q1"  align="center">
    <h1>ข้อที่ 1  จงทายคำจากภาพที่กำหนดให้</h1>
    <img src="../assets/new.jpg" width="250" height="350" align="center">
    <img src="../assets/clear.jpg" width="150" height="150" align="center">
    <h3>2 พยางค์</h3>
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
    this.$router.push({name:'ans1'});
    }

  }
  }
</script>
