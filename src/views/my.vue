<template>
    <div>
    <header>
        <i class="iconfont">&#xe62d;</i>
        <p>我的717商城</p>
    </header>
    <div class="main">

        <div class="message">
            <p>
                <img src="../assets/1.png" alt="">
            </p>
            <p>71712419214</p>
        </div>
        <div class="shop">
            <p>
                <img src="../assets/1.png" alt="">
                <span>我的店铺</span>
            </p>
            <p><img src="../assets/1.png" alt=""></p>
        </div>
        <nav>
            <ul>
                <li>
                    <i class="iconfont">&#xe604;</i>
                    <span>待付款</span>
                </li>
                <li>
                    <i class="iconfont">&#xe605;</i>
                    <span>待发货</span>
                </li>
                <li>
                    <i class="iconfont">&#xe606;</i>
                    <span>待收货</span>
                </li>
                <li>
                    <i class="iconfont">&#xe607;</i>
                    <span>售后</span>
                </li>
                <li>
                    <i class="iconfont">&#xe608;</i>
                    <span>我的订单</span>
                </li>
            </ul>
        </nav>
        <div class="list">
            <ul>
                <li>
                    <p>
                        <i class="iconfont">&#xe641;</i>
                        <span>我的社区</span>
                    </p>
                    <p>></p>
                </li>
                <li>
                    <p>
                        <i class="iconfont">&#xe640;</i>
                        <span>账户余额</span>
                    </p>
                    <p>></p>
                </li>
                <li @click="go_address">
                    <p>
                        <i class="iconfont">&#xe63f;</i>
                        <span>地址管理</span>
                    </p>
                    <p>></p>
                </li>
            </ul>
        </div>
        <div class="h5">
            <h5>
                <img src="../assets/1.png" alt="">
                热门推荐
                <img src="../assets/1.png" alt="">
            </h5>
        </div>
        <main>
            <ul>
                <li>
                    <img src="../assets/1.png" alt="">
                    <p>裕龙酒业原味稻2.5kg*2袋无常大米礼品装，稻花香2</p>
                    <p>
                        <span>￥110.00</span>
                        <img src="../assets/1.png" alt="">
                    </p>
                </li>
                <li>
                    <img src="../assets/1.png" alt="">
                    <p>福溶嘉 组合装礼盒（红花籽油+亚麻籽油） 1L*2建</p>
                    <p>
                        <span>￥398.00</span>
                        <img src="../assets/1.png" alt="">
                    </p>
                </li>
                <li>
                    <img src="../assets/1.png" alt="">
                    <p>好恰 山茶油礼盒2L*2、提</p>
                    <p>
                        <span>￥448.00</span>
                        <img src="../assets/1.png" alt="">
                    </p>
                </li>
                <li>
                    <img src="../assets/1.png" alt="">
                    <p>都市余味 红香妃葡萄干218g</p>
                    <p>
                        <span>￥25.90</span>
                        <img src="../assets/1.png" alt="">
                    </p>
                </li>
            </ul>
        </main>
    </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name:'my',
        methods:{
            go_address:function (params) {
                this.$router.push('address')
            }
        }
    }
</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    header {
        width:100%;
        height:1rem;
        position: relative;
        display: flex;
        align-items: center;
        .iconfont{
            position: absolute;
            width: 0.4rem;
            height: 0.4rem;
            left: .25rem;
        }
        p{
            width: 100%;
            text-align: center;
            line-height: 1rem;
            font-size: 0.35rem;
            color: #333;
        }
    }
    .main{
        width:100%;
        display: flex;
        flex-direction: column;
        flex: 1;
        overflow-y: auto;

    }
    .message{
        width: 100%;
        flex-shrink: 0;
        height: 1.97rem;
        background: url(../assets/1.png);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p{
            &:first-child{
                width: 1.23rem;
                height: 1.24rem;
                border-radius: 100%;
                img{
                    width:100%;
                    height:100%;
                }
            }
            &:last-child{
                text-align: center;
                color: #ffffff;
                font-size: 0.3rem;
                line-height: .5rem;
                font-weight: normal;
                font-family: PingFangSC-Regular, sans-serif;
            }
        }
    }
    .shop{
        width:100%;
        height:1.32rem;
        padding:0 .3rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eeeeee;
        align-items: center;
        background: #fff;
        flex-shrink: 0;
        p{
            &:first-child{
                display: flex;
                width:35%;
                height: 100%;
                align-items: center;
                justify-content: space-around;
                img{
                    width: 0.7rem;
                    height: 0.63rem;
                }
                span{
                    font-size: .34rem;
                    color:#fc4141;
                }
            }
            &:last-child{
                width: 0.17rem;
                height: 0.35rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
        }
    }
    nav{
        width: 100%;
        height: 1.47rem;
        background: #fff;
        margin-bottom:.2rem;
        ul{
            width:100%;
            height:100%;
            display: flex;
            li{
                display: flex;
                flex:1;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .iconfont{
                    color:#000;
                    font-size: .50rem;
                }
                span{
                    color:#000;
                    font-size: .28rem;
                    padding-top: .1rem;
                }
            }
        }
    }
    .list{
        width:100%;
        background: #fff;
        margin-bottom: .1rem;
        ul{
            width:100%;
            li{
                width: 100%;
                height: 1.03rem;
                border-bottom: 1px solid #e5e5e5;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding:0 .4rem 0 .6rem;
                p{
                    &:first-child{
                        width:30%;
                        height:100%;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        .iconfont{
                            font-size:.46rem;
                            color:#000;
                        }
                        span{
                            color:#000;
                            font-size: .28rem;
                        }
                    }
                }
            }
        }
    }
    .h5{
        width: 100%;
        background: #ffffff;
        height: .9rem;
        line-height: .9rem;
        h5{
            width:100%;
            height:100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.3rem;
            img{
                margin:0 .2rem 0 .2rem;
                width: 0.34rem;
                height: 0.24rem;
            }
        }
    }

    main{
        width:100%;
        ul{
            width:100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li{
                width: 49%;
                display: flex;
                flex-direction: column;
                background: #fff;
                margin-bottom: 2%;
                img{
                    width:3.6rem;
                    height:3.6rem;
                }
                p{
                    &:nth-child(2){
                        width:100%;
                        font-size: 0.28rem;
                        line-height: 0.35rem;
                        height: .7rem;
                        padding-left: 0.1rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    &:last-child{
                        width:100%;
                        height:.7rem;
                        display: flex;
                        padding-left: .1rem;
                        align-items: center;
                        justify-content: space-between;
                        padding-right:.3rem;
                        span{
                            font-size: 0.25rem;
                            color: #fc4141;
                        }
                        img{
                            width: 0.65rem;
                            height: 0.55rem;
                        }
                    }
                }
            }
        }
    }
</style>