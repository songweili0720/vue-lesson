<template>
  <div class="content">
    <ul>
      <li v-for="user in users" v-on:click="user.show = !user.show">
        <h2>{{user.name}}</h2>
        <h3 v-show="user.show">{{user.position}}</h3>
      </li>
    </ul>
  </div>
</template>
<style scoped>
  .content{
    width: 100%;
    max-width: 1200px;
    margin: 70px auto;
    padding: 0 20px;
    box-sizing: border-box;
    border: 1px solid red;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
  }
  li{
    flex-grow: 1;
    flex-basis: 200px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
  }
</style>
<script>
  export  default {
    data(){
      return {
        users:[
          {name:"Heny",position:"web 开发",show:false},
          {name:"Bucky",position:"java 开发",show:false},
          {name: "Emily",position:"net 开发",show:false},
          {name:"Word",position:"web 开发",show:false},
          {name:"Hello",position:"java 开发",show:false},
          {name: "Blue",position:"net 开发",show:false}
        ]
      }
    },
    created:function () {
      // this.$http.get("http://jsonplaceholder.tupicode.com/users").then((data)=>{

      //   this.users = data.body;
      // })
    }
  }
</script>
