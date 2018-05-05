<template>
  <div class="container">
    <form >
    <p>账号<input type="text" name="name"  v-model="user.name" /></p>
    <p>密码<input type="password" name="password" v-model="user.password" /></p>
    <p>性别<input type="radio" name="sex"  value="0" v-model="user.sex" />男
      <input name="sex" type="radio"  value="1" v-model="user.sex"/>女</p>
    <p>爱好<input type="checkbox" name="hobby" v-model="user.hobby" />足球
            <input type="checkbox" name="hobby"  v-model="user.hobby"/>蓝球
            <input type="checkbox" name="hobby" v-model="user.hobby" />排球</p>
    <p>部门<select name="depart" v-model="user.depart">
      <option value="行政部">行政部</option>
      <option value="人事部">人事部</option>
      <option value="财务部">财务部</option>
      </select></p>
    <p>描述<textarea rows="3" cols="30" name="desc" v-model="user.desc"></textarea></p>
    <p><input type="button" value="保存" @click="save()"  name="btn"/></p>
    </form>
</div>
</template>
<script>
  export default{
    data(){
      return {
        user:{
          name:'',
          sex:'',
          password:'',
          hobby:'',
          depart:'',
          desc:''
        }
      }
    },
 methods:{
   save(){
     console.log(["1", "2", "3"].map(parseInt));
     var formData = JSON.stringify(this.user);
     console.log(formData);
     this.$http.post('/user',formData).then((response)=>{
       //成功返回的结果
     },(response)=>{
   //失败返回的结果
     });
   }
 }
  }
</script>
<style scoped>
  div{
    margin: 100px;
  }
</style>
