<template>
  <footer>
    <p>{{copyRight}}</p>
  </footer>
</template>
<script>
  export  default {
    data(){
      return{
        copyRight:"某某公司"
      }
    }
  }
</script>
<style scoped>
  footer{
    background: #222;
    padding: 6px;
  }
p{
  color: lightgreen;
  text-align: center;
}

</style>
