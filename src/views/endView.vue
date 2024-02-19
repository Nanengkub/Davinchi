<template>
    <div class="home">
      <h1>END!!</h1>
      <img src="https://c0.klipartz.com/pngpicture/296/544/gratis-png-felicitaciones-multicoloras-concurso-de-youtube-de-la-escuela-dunottar-icono-de-felicitaciones-de-s-thumbnail.png" width="800" height="550">
    </div>
    <div class="col-sm-12">
    <button type="button" style="font-size:30px;" class="btn btn-warning" @click="start()">START AGAIN</button>
  </div>
  </template>
  
  <script>
  export default {
  
    name: 'App',
    methods:{
      start(){
      localStorage.setItem("auth",false);
      this.$router.push({name:'home'});
      }
  
    }
    }
  </script>