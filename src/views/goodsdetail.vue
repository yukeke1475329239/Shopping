<template>
	<div class="goodslist">
		<div class="header-wrap">
			<header class="goods-header">
				<span class="back" >
					<i class="fa fa-angle-left"></i> 返回
				</span>
				<ul class="tab">
					<li>商品</li>
					<li>详情</li>
				</ul>
			</header>
		</div>
		
		<div class="goods-detial">
			<swiper :options="swiperOption" ref="mySwiperA">
				<swiper-slide>
					<div class="banner">
						

          <img :src="'http://www.lb717.com/'+detail_data.obj_data" alt="" />
					</div>
				</swiper-slide>
		
				<div class="swiper-pagination" slot="pagination"></div>
				<div class="swiper-scrollbar" slot="scrollbar"></div>
			</swiper>
			<p class="goods-name">
				{{detail_data.goods_name}}
			</p>
			<div class="money">
				<p class="goods-price">￥{{detail_data.discount_price}} <span>￥68.00</span></p>
				<p class="freight">(运费：￥0.00)</p>
			</div>
			
			<div class="shop">
				<dl>
					<dt><img src="../assets/2.png" alt="" /></dt>
					<dd>
						<p class="shop-name">嫩江源是食品专营店</p>
						<p class="shop-men">NJY1407004</p>
					</dd>
				</dl>
				<button class="goin-shop">进入店铺</button>
			</div>
			
			<div class="recommend">
				<dl>
					<dt><img src="../assets/2.png" alt="" /></dt>
					<dd>
						<p class="goods-title">田思思TSISI  L-阿拉伯糖 木糖 低聚木糖    20ml*9瓶/盒 礼品装    买2盒赠1盒99迷你装</p>
						<p class="price">￥199.00</p>
					</dd>
				</dl>
				<dl>
					<dt><img src="../assets/1.png" alt="" /></dt>
					<dd>
						<p class="goods-title">田思思TSISI  L-阿拉伯糖 木糖 低聚木糖    20ml*9瓶/盒 礼品装    买2盒赠1盒99迷你装</p>
						<p class="price">￥199.00</p>
					</dd>
				</dl>
				<dl>
					<dt><img src="../assets/1.png" alt="" /></dt>
					<dd>
						<p class="goods-title">田思思TSISI  L-阿拉伯糖 木糖 低聚木糖    20ml*9瓶/盒 礼品装    买2盒赠1盒99迷你装</p>
						<p class="price">￥199.00</p>
					</dd>
				</dl>
				<dl>
					<dt><img src="../assets/6.png" alt="" /></dt>
					<dd>
						<p class="goods-title">田思思TSISI  L-阿拉伯糖 木糖 低聚木糖    20ml*9瓶/盒 礼品装    买2盒赠1盒99迷你装</p>
						<p class="price">￥199.00</p>
					</dd>
				</dl>
			</div>
			
		</div>
	</div>

</template>
<script>
	export default{
    data(){
      return {
      	swiperOption: {
          autoplay: 1000,
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          scrollbar:'.swiper-scrollbar',
          mousewheelControl : true,
          observeParents:true,
          onTransitionStart(swiper){
             console.log(swiper)
		  },
		  detail_data:{

		  }
      },
      mounted(){
      	console.log(this.$router.params)
      }
      }
    },
     created(){
     	console.log(this.info)
		for(var i=0;i<this.$store.state.list.length;i++){
			if(this.$route.query.id==this.$store.state.goods_info[i].goods_id){
				this.detail_data=this.$store.state.goods_info[i];
				console.log(this.detail_data);
			}
		}
	}
    }
</script>
<style>
	.goodslist {
		width: 100%;
		height: 100%;
		overflow-y: hidden;
	}
	.header-wrap{
		width: 100%;
		height: 45px;
		position: fixed;
		top:0;
		z-index: 999;
		background: #fff;
	}
	.goods-header {
		line-height: 45px;
		text-align: center;
		position: relative;
	}
	
	.goods-header .back {
		position: absolute;
		left: 10px;
		top: 0;
		font-size: 14px;
	}
	
	.goods-header .back i {
		font-size: 14px;
	}
	
	.goods-header .tab {
		width: 30%;
		margin: 0 auto;
	}
	
	.goods-header .tab li {
		width: 50%;
		float: left;
		text-align: center;
		font-size: 14px;
	}
	.goods-detial{
		padding-bottom: 48px;
	}
	.goods-detial .banner img{
		width: 100%;
	}
	.goods-name{
		padding:8px 10px;
		background: #fff;
	}
	.money{
		padding:0 12px;
		background: #fff;
	}
	.money .goods-price{
		font-weight: 600;
	}
	.money .goods-price span{
		color:#ccc;
		font-weight: normal;
		text-decoration:line-through;
	}
	.money .freight{
		margin-top: 8px;
	}
	.shop{
		background: #fff;
		padding: 0 10px;
		padding-top: 30px;
		padding-bottom: 5px;
		position: relative;
	}
	.shop dl{
		display: flex;
	}
	.shop dl dt{
		width:30px;
		height: 30px;
		padding:2px;
	}
	.shop dl dt img{
		width: 100%;
		height: 100%;
	}
	.shop dl dd{
		margin-left: 5px;
	}
	.shop dl dd .shop-men{
		margin-top: 5px;
	}
	.shop .goin-shop{
		width:100px;
		height:30px;
		background: #fff;
		border: 1px #ccc solid;
		border-radius: 5px;
		position: absolute;
		top:35px;
		right:10px;
	}
	.recommend{
		width: 100%;
		background: #fff;
		margin-top: 5px;
		display: flex;
		overflow: hidden;
	}
	.recommend dl {
		width:85px;
		padding: 5px 4px;
		text-align: center;
	}
	.recommend dl dt{
		width: 100%;
	}
	.recommend dl dt img{
		width: 100%;
	}
	.recommend dl dd .goods-title{
		width: 85px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.recommend dl dd .price{
		color:#FC4141;
		margin-top: 5px;
		font-weight: 600;
	}

</style>