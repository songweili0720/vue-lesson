<template>
  <div style=" margin: 70px auto;padding: 0 20px; border: 1px solid red;">
    （11位数字）手机号：<input type="text" id="phone"> <br/>
    （18位数字、字母）身份证号：<input type="text" id="cID"><br/>
   (6位数字) 支付密码：<input type="text" id="pwd"><br/>
    （4位数字、字母）证件后四位：<input type="text" id="four"><br/>
    (最多10个汉字)姓名：<input type="text" id="name"><br/>
   （8-20位数字+字母） 登录密码：<input type="text" id="loginPwd"><br/>
    （最大19位数字） 卡号：<input type="text" id="card"><br/>
    <span @click="validate"> 验证 </span>

  </div>
</template>
<style>

</style>
<script>
  export  default {

    methods:{
      validate(){

        var phone = document.getElementById("phone").value;
        var cID = document.getElementById("cID").value;
        var pwd = document.getElementById("pwd").value;
        var four = document.getElementById("four").value;
        var name = document.getElementById("name").value;
        var loginPwd = document.getElementById("loginPwd").value;
        var card = document.getElementById("card").value;

        if(phone !== ""){
          // /^1\d{10}$/  手机号验证
          if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(phone))){
            alert("手机号不正确，请重新输入！");
            // return false;
          }else{
            console.log("手机号输入正确");
          }
        }
        if(cID !== ""){
          if(!(/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/.test(cID))){
            alert("身份证号不正确，请重新输入！");
            // return false;
          }else{
            console.log("身份证号输入正确");
          }
        }
        if(pwd !== ""){
          if(!(/^\d{6}$/.test(pwd))){
            alert("支付密码不正确，请重新输入！");
            // return false;
          }else{
            console.log("支付密码输入正确");
          }
        }
        if(name !== ""){
          if(!(/^[\u4e00-\u9fa5]{2,10}$/.test(name))){
            alert("姓名不正确，请重新输入！");
            // return false;
          }else{
            console.log("姓名输入正确");
          }
        }
        if(loginPwd !== ""){
          if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{8,20}$/.test(loginPwd))){
            alert("登录密码不正确，请重新输入！");
            // return false;
          }else{
            console.log("登录密码输入正确");
          }
        }
        if(four !== ""){
          if(!(/^\d{3}(\d|[xX])$/.test(four))){
            alert("后四位不正确，请重新输入！");
            // return false;
          }else{
            console.log("后四位输入正确");
          }
        }
        if(card !== ""){
          if(!(/^\d{15,19}$/.test(card))){
            alert("卡号不正确，请重新输入！");
            // return false;
          }else{
            console.log("卡号输入正确");
          }
        }


      }
      // ,
      // goToMenu(){
      //   //跳转到上一次浏览的页面
      //   this.$router.go(-1);
      //
      //   //指定跳转 的地址(指定跳转的页面都是主菜单)
      //   this.$router.replace('/menu')
      //
      //   //指定跳转到路由的名字下
      //   this.$router.replace({name:'home'});
      //   //通过push进行跳转,使用push可以传入更多的参数
      //   this.$router.push('menu');
      //   //也可以使用下面这种方法
      //   this.$router.push({name:'home'});
      // }
    }
  }
  </script>
