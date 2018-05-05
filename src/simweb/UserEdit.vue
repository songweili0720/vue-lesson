<template>
  <div class="container">
    <p>id：<input type="text" name="id" :value="userId" /></p>
    <p>姓名：<input type="text" name="name" :value="name" /></p>
    <p>职位：<input type="text" name="position" :value="position" /></p>
    <p>性别：<input type="radio" name="sex"  value="0" />男
      <input name="sex" type="radio"  value="1" />女</p>
    <p>爱好<input type="checkbox" name="hobby"  />足球
      <input type="checkbox" name="hobby"  />蓝球
      <input type="checkbox" name="hobby"  />排球</p>
    <p>部门<select name="depart">
      <option value="行政部">行政部</option>
      <option value="人事部">人事部</option>
      <option value="财务部">财务部</option>
    </select></p>
    <p>描述<textarea rows="3" cols="30"></textarea></p>
    <p><input type="button" value="编辑"  name="btn" @click="save()"/>
      <input type="button" @click="goBack();" value="返回"  name="back"/></p>
  </div>
</template>
<script>
  export default{
    // console.log(this.$route.params.id);
     data(){
       return {
         userId:"",
         name:"",
         position:""
       }
     },
      mounted(){
        this.userId = this.$route.params.user.id;
        this.name = this.$route.params.user.name;
        this.position = this.$route.params.user.position

    },
    methods:{
       goBack(){
          this.$router.go(-1);
       },
      save(){
         this.$router.push("/user")
      }
    }
  }
</script>
<style scoped>
  div{
    margin: 100px;
  }
</style>
