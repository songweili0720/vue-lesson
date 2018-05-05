<template>
  <div class="container">
    <h1>{{title}}</h1>
    <p class="lead">统计次数：{{count}}</p>
    <p class="lead">发表于：{{date | moment}}</p>
    <p class="lead">内容：{{content}}</p>
    <!--<app-author v-bind:article-name="name"></app-author>-->
    <app-author v-bind:articleName="name"></app-author>
    <app-share @shared = "fooShare($event,10)"></app-share>
  </div>
</template>
<script>
  import moment from "moment";
  import Author from "../author/Author.vue";
  import Share from "../share/Share.vue"
  export  default{
   data:function() {
     return{
       title:"这是一个标题",
       date:new Date(),
       content:"这是一个世界",
       name:"",
       count:0
     }
   },
  mounted(){
     this.name = "wod eskdfja";
  },
    filters:{
     moment:function (value) {
        return moment(value).format("YYYY-MM-DD HH:mm:ss");
     }
    },
    components:{
       "app-author":Author,
      "app-share":Share
    },
    methods:{
      fooShare(event,age){
        //event可以得到子组件传过来的参数
        console.log(event,age);
        this.count++;
      }
    }
  }
</script>


