<template>
    <div class="home" @scroll="can_i_query && get_pos()">
        <div class="scroller">
        <header>
            <a href="">服务站</a>
            <span><input type="text" placeholder="搜索" @focus="go_to_search"></span>
            <a href="">我的店铺</a>
        </header>
        <div class="banner">
                <div class="swiper-container">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide slide1"></li>
                    <li class="swiper-slide slide2"></li>
                    <li class="swiper-slide slide3"></li>
                </ul>
                </div>
            </div>
            <div class="sub-nav-wrap">
                <div class="sub-nav ks-clear">
                    <dl>
                        <dt><img src="../assets/1.png" alt=""></dt>
                        <dd>我的家乡</dd>
                    </dl>
                    <dl>
                        <dt><img src="../assets/2.png" alt=""></dt>
                        <dd>我的家乡</dd>
                    </dl>
                    <dl>
                        <dt><img src="../assets/3.png" alt=""></dt>
                        <dd>我的家乡</dd>
                    </dl>
                    <dl>
                        <dt><img src="../assets/1.png" alt=""></dt>
                        <dd>我的家乡</dd>
                    </dl>
                    <dl>
                        <dt><img src="../assets/2.png" alt=""></dt>
                        <dd>我的家乡</dd>
                    </dl>
                    <dl>
                        <dt><img src="../assets/3.png" alt=""></dt>
                        <dd>我的家乡</dd>
                    </dl>
                    <dl>
                        <dt><img src="../assets/1.png" alt=""></dt>
                        <dd>我的家乡</dd>
                    </dl>
                    <dl>
                        <dt><img src="../assets/2.png" alt=""></dt>
                        <dd>我的家乡</dd>
                    </dl>
                </div>
                <div class="dynamic">
                    <span class="dynamic-title">商城动态</span>
                    <span class="dynamic-info">
                        {{test}}
                    </span>
                </div>
            </div>
            <div class="goods-list ks-clear">
                <goods v-for="x in goods_list" :info="x" :key="x.goods_id"></goods>
            </div>
            <transition>
                <p v-if="is_finished" class="finished">我是有底线的。。。</p>
            </transition>
            
        </div>    
    </div>
</template>
<script>
require('../static/css/Jswiper.css');
import JSwiper from '../static/js/Jswiper'
import goods from '../component/goods.vue'
    export default {
        data () {
            return {
                test:123,
                can_i_query:true,
                goods_list:[],
                scroller_height:0,
                can_i_query:true,
                channel_id:1,
                is_finished:false
            }
        },
        components: {
            goods   
        },
        created(){
            let vm = this;
            this.$http.get('/home/goodslist',{params:{channel_id:vm.channel_id}}).then((res)=>{
        
                vm.goods_list = res.data.data.data;   
                
            })
        },
        updated(){
            this.scroller_height = this.$el.querySelector('.scroller').offsetHeight;
            
        },
        watch:{
            
        },
        methods:{
            go_to_search:function () {
                this.$router.push({
                    path:'/search'
                })
            },
            get_pos(){
                let vm =this;
                 if(
                     this.$el.querySelector('.scroller').offsetHeight-(this.$el.scrollTop+this.$el.offsetHeight)<50
                     ){
                    this.can_i_query=false;
                    this.$http.get('/home/goodslist',{params:{channel_id:vm.channel_id++}}).then((res)=>{
                        //console.log(res.data.data)
                        if(typeof res.data !='string'){
                            vm.goods_list = vm.goods_list.concat(res.data.data.data);  
                            console.log(vm.goods_list) 
                            this.can_i_query=true;
                        }else{
                            console.log(res.data);
                            this.is_finished = true;
                        }
                        
                    })

                 } 
            }
        },
        mounted () {
            new JSwiper('.swiper-container',{
                autoplay:true,
                afterSlide:function (params) {
                    //console.log(params)
                }
            })
        }
    }
</script>
<style lang="scss">
    
    .home{
        padding-top: .88rem;
        background: #f5f5f5;
    }
    header{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9;
        width: 100%;
        height: .88rem;
        background: #fff;
    }
    .banner{
        margin-bottom: .1rem;
    }
    .slide1{
        background:url(../assets/1.png);
        background-size: contain;
    }
    .slide2{
        background:url(../assets/2.png);
        background-size: contain;
    }
    .slide3{
        background:url(../assets/3.png);
        background-size: contain;
    }
    .sub-nav-wrap{
        background: #fff;
        dl{
            float: left;
            width: 25%;
            text-aligh: center;
        }
        img{
            width: .9rem;
        }
        margin-bottom: .1rem;
    }
    .dynamic{
        margin-bottom: .1rem;
        height: 40px;
    }
    .goods-list{
        background: #f5f5f5;
    }
    .finished{
        height: 36px;
        line-height: 36px;
        text-align:center;
    }
</style>