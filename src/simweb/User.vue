<template>
  <div class="container">
    <table class="table table-bordered active">
      <tr><td>姓名</td><td>职务</td><td>操作</td></tr>
      <tr v-for="(user,index) in users">
        <td>{{user.name}}</td>
        <td>{{user.position}}</td>
        <td><input type="button" @click="editUser(user)" value="编辑">
          <input type="button" value="删除" @click="test()">
          <input type="button" value="显示" @click = "stateHidden(user.id)">
        </td>
        <td v-if="(user.id === currentId) ? true : false" >
          {{index}}
        </td>
      </tr>
    </table>
    <alert v-show="show">
      <div slot="toolbar">
        <a style="float: left" @click="cancelBtn()">完成</a>
        <a style="float: right" @click="cancelBtn()">取消</a>
      </div>
    </alert>
  </div>

</template>

<style scoped lang="css">
  @import "../css/index.css";
  .disabled { pointer-events: none; }
</style>
<script>
  import {adduser,test2} from '../js/user.js'
  import Dialog from "../simweb/Dialog.vue"
  export  default {
    components:{
      "alert":Dialog
    },
    data(){
      return {
        users:[
          {name:"Heny",position:"web 开发",show:false,id:1},
          {name:"Bucky",position:"java 开发",show:false,id:2},
          {name: "Emily",position:"net 开发",show:false,id:3},
          {name:"Word",position:"web 开发",show:false,id:4},
          {name:"Hello",position:"java 开发",show:false,id:5},
          {name: "Blue",position:"net 开发",show:false,id:6}
        ],
        id:'',
        isShow:false,
        show:false,
        hidden:true,
        currentId:''

      }
    },
    mounted() {
      console.log(2222);
      console.log(this.$route.params.sex);
      console.log(this.$route.query.name);

    },
    methods:{
      stateHidden(id){
         this.currentId = id;
      }
      ,
      cancelBtn(){
        this.show = false;
      },
      showDialog() {
          this.show = true;
      },
      editUser(user){
             //params 里面传的是一个对象
        // this.http.interceptors.push(function (request,next) {
        //   //下发请求之前的操作，比如加载loading
        //   next(function(response){
        //     //下发请求之后，返回数据，隐藏loading
        //   })
        // })
              this.$router.push({name:'edit',params:{user:user}});

      },
      test(){
        adduser();
        test2();
      }
    }
  }
</script>
