<template>
  <transition :name="sildename">
    <div id="second">
    	<h2>second</h2>
    	<p>second组件接收值{{mg}}</p>
      <router-link to='/'>
         <button>跳到主页</button>
      </router-link>
    </div>
  </transition>
</template>

<script>


export default {
  
  data () {
    return { 
      msg: 'world' ,
      sildename:"slide-go"
    }
  },
  computed:{
     mg(){
        return this.$store.state.mg;
     }
  },
  mounted(){
  	  
  }
}
</script>


<style>
@import "../assets/common.css";

#second{  
	width: 300px;
	height: 160px;
	border: solid red 1px;
  background-color: #95F774;
}
</style>