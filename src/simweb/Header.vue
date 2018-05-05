<template>
  <header>
    <div class="top_bg">
      <img src="../image/top/logo1.png" height="51" width="409"/>
    </div>
    <ul>
      <li><router-link tag="div" :to="homelink">主页</router-link></li>
      <!--<li>日志源-->
        <!--<ul>-->
          <!--<li><router-link to="/search">日志源管理</router-link></li>-->
          <!--<li><router-link to="/dataSource">日志摘要</router-link></li>-->
        <!--</ul>-->
      <!--</li>-->
      <li><router-link to="/search">日志查询</router-link></li>
      <li><router-link to="/dataSource">事件查询</router-link></li>
      <li><router-link :to="{path: '/user', params: { sex: 'hello param', sex2: 'hello param2' }, query: { name: 'hello query', name2: 'hello query2' }}">用户管理</router-link></li>
      <li><router-link to="/register">注册</router-link></li>
      <li><router-link to="/layout">css3布局</router-link></li>
    </ul>
    </header>
</template>

<script>
  export  default {
     data(){
       return {
         homelink:"/"
       }
     }
  }
  </script>
<style scoped>
  .top_bg{
    background: url("../image/top/top_bg.png") repeat-x;
    width: 100%;
    height:51px;
  }
  div ul{
    list-style: none;
  }
  div li{
    padding: 5px 10px;
    border: 1px solid #ccc;
    float: left;
  }
</style>
