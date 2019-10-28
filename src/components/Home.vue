<template>
  <div class="hello">
    <mt-swipe :auto="4000" class="lunbotu">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newlist">
          <img src="../images/menu1.png" >
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/pictureshare">
          <img src="../images/menu2.png" >
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/commoditypurchase">
          <img src="../images/menu3.png" >
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/feedback">
          <img src="../images/menu4.png" >
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/videoarea">
          <img src="../images/menu5.png" >
          <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/contact">
          <img src="../images/menu6.png" >
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      lunbotuList: [] // 保存轮播图的数组
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      // 获取轮播图数据的方法
      this.$http.get("").then(result => {
        console.log(result.body);       
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lunbotu {
  height: 120px;
  background-color: greenyellow;
}

.mui-grid-view.mui-grid-9 {
  background-color: white;
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
img{
  width: 60px;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
  font-size:13px;
}
</style>
