<template>
  <div id="app">
    <h2>我是APP组件</h2>
<!--    router-link标签-->
<!--    ①to属性：用于跳转制定路径-->
<!--    ②tag属性：让其渲染成某个标签（默认被渲染为a标签）-->
<!--    ③replace属性：可以使网页不能来回返回-->
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->

<!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace>关于</router-link>-->
    <button @click="homeClick" class="active">首页</button>
    <button @click="aboutClick" class="active">关于</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    homeClick(){
      //通过代码的方式修改路由 vue-router
      // this.$router.push('/home')   //push => pushstate 具有来回返回
      this.$router.replace('/home') //无返回
    },
    aboutClick(){
      // this.$router.push('/about')   //push => pushstate 具有来回返回
      this.$router.replace('/about') //无返回
    }
  }
}
</script>

<style>
  .active{
    color: red;
  }
</style>
