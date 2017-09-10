<template>
	<div class="sort">
		<div class='ipt'>
			<div class="sort_input">
				<img src="../assets/8.png" alt="" />
				<input type="text" placeholder="请输入你要购买的商品" class='search'/>
			</div>
		</div>
		<div class="bottom">
			<div class="left">
				<ul>
					<li class="m">家乡味道</li>
					<li>进口食品</li>
					<li>牛奶食品</li>
					<li>休闲零食</li>
					<li>生鲜果蔬</li>
					<li>米面粮油</li>
					<li>调味调料</li>
					<li>酒水饮料</li>
				</ul>
			</div>
			<div class='right'>
				<dl>
					<dt><img src="../assets/9.png" alt="" /></dt>
					<dd>东南</dd>
				</dl>
				<dl>
					<dt><img src="../assets/1.png" alt="" /></dt>
					<dd>西北</dd>
				</dl>
				<dl>
					<dt><img src="../assets/2.png" alt="" /></dt>
					<dd>东北</dd>
				</dl>
				<dl>
					<dt><img src="../assets/3.png" alt="" /></dt>
					<dd>西南</dd>
				</dl>
				<dl>
					<dt><img src="../assets/10.png" alt="" /></dt>
					<dd>中原</dd>
				</dl>
			</div>
		</div>
	</div>
</template>

<script>
    export default{
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
	.ipt{
		height: .88rem;
		background: #fff;
		border-bottom: 1px solid #ccc;
		padding-top: .12rem;
		box-sizing: border-box;
    }
    .search{
        outline:none;
        border: none;
        background: #f5f5f5;
    }
	.sort_input{
		width: 80%;
		height: .6rem;
		background: #f1f1f1;
		margin: 0 auto;
		border-radius: 5px;
        display: flex;
        
	}
	.ipt img{
		width: 12px;
		height: 12px;
		display: block;
		margin: 8px 10px 0 30px;
	}
	.ipt .input{
		border: none;
		width: 70%;
		background: none;
		font-size: 13px;
	}
	.bottom{
		display: flex;
		background: #fff;
	}
	.left{
		width: 30%;
		font-size: .32rem;
		margin-right: .1rem;
	}
	.left li{
		text-align: center;
		height: .88rem;
		line-height: .88rem;
		background: #f0eced;
		color: rgb(125,120,120);
	}
	.left .m{
		border-left: 2px  solid red;
		background: #fff;
	}
	.right{
		flex: 1;
	}
	.right dl{
		margin-bottom: .1rem;
		float: left;
		width: 30%;
		text-align: center;
		margin-right: .1rem;
		background: #f7f7f7;
		height: 2rem;
	}
	.right dl dt{
		width: 80%;
		margin: 0 auto
	}
	.right dl dt img{
		width: 100%;
		height: auto;
	}
	.right dl dd{
		color: #909090;
	}
</style>	
