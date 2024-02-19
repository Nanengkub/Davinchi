<template>
    <div class="ans1"  align="center">
      <h1>ข้อที่ 6</h1>
      <img src="https://peakbusinessvaluation.com/wp-content/uploads/how-to-value-a-grocery-store-or-supermarket-scaled.webp" width="500" height="300">
      <img src="https://socialnews.teenee.com/starpost/img6/59815.jpg" width="400"  height="300">
      <img src="https://image.makewebeasy.net/makeweb/m_1920x0/JFwjBG0OD/Tips/%E0%B8%9B%E0%B8%81%E0%B8%9A%E0%B8%97%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A12.png" width="400"  height="300">
      <img src="https://png.pngtree.com/png-clipart/20201225/ourlarge/pngtree-prohibition-signs-for-minors-png-image_2605265.jpg" width="400"  height="300">
      <h3>4 พยางค์</h3>
      <h2>เฉลย => ซุปเปอร์โนว่า</h2>
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
      this.$router.push({name:'end'});
      }
  
    }
    }
  </script>