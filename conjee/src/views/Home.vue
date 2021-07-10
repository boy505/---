<template>
  <div class="home">
    <van-nav-bar>
      <div slot="left" class="nav">
      <van-icon class="nav-icon" name="https://b.yzcdn.cn/vant/icon-demo-1126.png" size="30"/>
        <span>欢迎您，请登录</span>
      </div>
    <div slot="right" class="nav-icon-right">
      <van-icon name="ellipsis" size="30px" />
    </div>
  </van-nav-bar>
    <van-grid column-num="2">
      <van-grid-item icon="photo-o" text="外卖到家" />
      <van-grid-item icon="photo-o" text="到店自取" />
    </van-grid>
    <van-grid column-num="5">
      <van-grid-item v-for="value in 5" :key="value" icon="photo-o" text="文字" />
    </van-grid>
    <div class="swipe">
<!--轮播图-->
      <van-swipe :autoplay="3000" lazy-render :show-indicators= "false">
        <van-swipe-item v-for="(image,i) of images" :key="i">
          <img :src="image" alt="" :height="h">
        </van-swipe-item>
      </van-swipe>
    </div>
<!--    底部导航栏-->
    <van-tabbar>
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">购物车</van-tabbar-item>
      <van-tabbar-item icon="friends-o">订单详情</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>

</template>

<script>
export default {
  data() {

    return {
      images : [
        require('../assets/imgs/1.jpg'),
        require('../assets/imgs/2.jpg'),
        require('../assets/imgs/3.jpg'),
      ],
      h: ''
    };
  },
  methods:{
    initSwipe(){
      let picWidth = 1242; // 图片宽
      let picHeight = 699; // 图片高
      let screenWidth = window.screen.width/2; // 屏幕宽
      this.h = Math.floor((picHeight*screenWidth)/picWidth)+"px";
    },
  }
}
</script>

<style scoped>
   .nav span{
     font-size: 15px;
     color: black;
     line-height: 46px;
   }
   .nav-icon {
     position: relative;
     top: 8px;
   }
   .nav-icon-right i{
     color: black;
   }
   .swipe {
     width: 50%;
   }
   .swipe img{
     width: 100%;
   }
</style>