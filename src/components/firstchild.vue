<template>
  <transition :name="sildename">
    <div id="firstchild">
    	<h2>firstchild</h2>
      <p>{{mssg}}</p>
      {{mg}}
      <button v-on:click='sendMsg'>firstchild切换</button>
    </div>
  </transition>
</template>

<script>
// import store from '../assets/donghua'

export default {
  
  data () {
    return {
      mssg:'',
      sildename:'slide-go'
    }
  }, 
  computed:{
    mg(){
      return this.$store.state.mg;
    }
  },
  methods:{
  	sendMsg:function(){
      
  		this.$router.push('/second');
  	}
  },
  mounted(){
    
  }
}
</script>

<style type="text/css">
@import "../assets/common.css";

  #firstchild{ 
    width: 400px;
    height: 140px;
    border:solid #000000 1px;
    background-color: #399BA0;
  }
</style>

