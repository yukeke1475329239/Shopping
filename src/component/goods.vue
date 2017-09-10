<template>
    <dl class="goods-wrap" @click="to_detail(info.goods_id)">
        <dt class="goods-img">
            <img :src="'http://www.lb717.com/'+info.obj_data" alt="">
        </dt>
        <dd class="goods-info">
            <p  class="goods-detail">
                {{info.goods_name}}
            </p>
            <p class="goods-price ks-clear">
                <span class="price">￥{{info.discount_price}}</span>
                <span class="goods-car" @click.stop="add_to_cart"> </span>
            </p>
        </dd>
    </dl>
</template>
<script>
    
    export default {
        data(){
            return {}
        },
        props:{
            info:{
                required:true
            }
        },
        name:'goods',
        methods:{
            add_to_cart(){
                this.$http.get('/add/cart').then( (res)=> {
                    if(res.data.code == 1){
                        console.log('添加成功')
                        this.$store.dispatch('add_goods',{
                            id:this.info.id,
                            price:this.info.price
                        })
                    }
                })
            },
            to_detail(id){
                this.$router.push({name:'goodsdetail',query:{
                    id:id
                }})
            }
        },
        mounted(){
            
        }
    }
</script>
<style lang="scss" scoped>
    .goods-wrap{
        float: left;
        width: 50%;
        border-bottom: 3px solid #f5f5f5;
        
        background: #fff;
        box-sizing: border-box;
        &:nth-of-type(2n+1){
            border-right: 2px solid #f5f5f5;
        }

        &:nth-of-type(2n){
            border-left: 1px solid #f5f5f5;
        }
    }
    .goods-img{
        width: 100%;
        img{
            display:block;
            width: 100%;
        }
    }
    .goods-info{
        color: #999;
        .goods-detail{
            height: 36px;
            overflow: hidden;
        }
        .goods-price{
            padding: 5px;
        }
        .price{
            color: #fc4141;
            font-weight: 800;
            float: left;
            line-height: 30px;
            font-size: 16px;
            font-family: PingFangSC-Regular, sans-serif;
        }
        .goods-car{
            float: right;
            width: 26px;height: 30px;
            background: url(../assets/addcart.png) no-repeat center center;
            background-size: contain;
        }
    }

</style>