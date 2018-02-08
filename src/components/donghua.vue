<template>
  <transition :name="sildename">
    <div id="thirdchild" v-show='true'>
    	<h2>donghua</h2>
    	<p>{{mg}}</p>
      <button @click='action'>切换跳转</button>
    </div>
  </transition>
</template>

<script>

export default {

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dat:'',
      sildename:'slide-back'
    }
  },
  computed:{
     mg(){
        return this.$store.getters.mg;
     },
     flag(){
        return this.$store.state.flag;
     }
  },
  methods:{
    action(){
      //改变state中的值或者说将值存入state中,关注commit的两个参数
      this.$store.commit('increment',10);
       this.$router.push('/firstchild');
    },
    handleIncrement(){
       this.$store.commit('add',10);
    }
  },
  mounted(){
    
  }
}
</script>

<style type="text/css">
@import "../assets/common.css";

  #thirdchild{
    width: 400px;
    height: 300px;
    border:solid red 1px;
    background-color: #F2C15D;
  }

</style>

