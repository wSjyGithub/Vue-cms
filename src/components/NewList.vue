<template>
  <div class="hello">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../images/menu2.png" />
          <div class="mui-media-body">
            <h4>幸福</h4>
            <div class="newlist_title">
              <span class="mui-ellipsis">发表时间:2019-10-27 22:31:31</span>
              <span class="mui-ellipsis">点击：0次</span>
          </div>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../images/menu2.png" />
          <div class="mui-media-body">
            <h4>幸福</h4>
            <div class="newlist_title">
              <span class="mui-ellipsis">发表时间:2019-10-27 22:31:31</span>
              <span class="mui-ellipsis">点击：0次</span>
          </div>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../images/menu2.png" />
          <div class="mui-media-body">
            <h4>幸福</h4>
            <div class="newlist_title">
              <span class="mui-ellipsis">发表时间:2019-10-27 22:31:31</span>
              <span class="mui-ellipsis">点击：0次</span>
          </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
      data(){
          return {}
      },
      methods:{
          getData(){
              this.$http.get('http://api.komavideo.com/news/list').then(res=>{
                  console.log(res.body);                 
              });
          }
      }, 
      created(){
          this.getData();
      }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mui-ellipsis {
  font-size: 13px;
  color: yellowgreen;
}
 .newlist_title{
  display: flex;
  justify-content: space-between;
}
</style>
