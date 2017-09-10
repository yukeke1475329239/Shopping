<template>
	<div class="conent">
		<div class="head">
			<i class="sea"></i>
			<input type="text" class="inp" placeholder="请输入您要购买的商品" v-model.trim="search_value">
			<span class="search-button" @click="search">搜索</span>
		</div>
		<div class="shanchu">
			<span>最近搜索</span>
			<i class="fa fa-trash-o trash"></i>
		</div>
		<div class="sousuojilu">
            <span v-if="!search_memory">暂无搜索记录...</span>
            <ul v-else>
                <li v-for="x in local_history">{{x}}</li>
            </ul>
		</div>
		<div class="zongzi">
			<p>
				大家都在搜
			</p>
			<ul>
				<li><span>粽子</span></li>
				<li><span>锅巴</span></li>
				<li><span>酱</span></li>
				<li><span>小吃</span></li>
				<li><span>零食</span></li>
				<li><span>干果</span></li>
				<li><span>特产</span></li>
				<li><span>油</span></li>
				<li><span>大米</span></li>
				<li><span>面粉</span></li>
			</ul>
		</div>
	</div>	
</template>
<script>
    export default{
        data(){
            return {
                search_value:'',
                local_history:[],
                search_memory:false
            }
        },
        created:function () {
            let ls = localStorage;
            let vm = this;
            if(ls.getItem('search-history')){
                vm.local_history = JSON.parse(ls.getItem('search-history'));
                vm.search_memory = true
            }
        },
        methods:{
            search(){
                let vm = this;
                let ls = localStorage;
                if(vm.search_value){
                    vm.local_history.push(vm.search_value)

                    ls.setItem('search-history',JSON.stringify(vm.local_history))
                }
            }
        }
    }
</script>
<style scoped>
	body{
	width:100%;
	height:100%;
	posiion:absolute;
	top:0;
	display:flex;
	flex-direction:colum;
	font-size:12px;
}
.conent{
	
	width:100%;
	height:auto;
}
.head{
    font-size:12px;
	width:100%;
	height:45px;
	
	position:relative;
	border-bottom:1px solid #ccc;
	span{
	display:inline-block;
	margin-left:20px;
	}
}
.inp{
	display: inline-block;
    width: 60%;
    height: 32px;
    background: #f5f5f5;
    border: none;
    margin-top: 6px;
    padding-left: 10px;
    outline: none;
}
.search-button{
    float: right;
    height: 100%;
    line-height: 44px;
    width: 20%;
    text-align: center;
     
}
.sea{
    float: left;
    width: 20%;
    height: 100%;
    background: url(../assets/4.png) no-repeat center center;
    background-size: contain; 
}
.shanchu{
	width:100%;
	height:40px;
	position:relative;
	line-height:40px;
	padding-left:20px;

}
.trash{
	position:absolute;
	top:15px;
	right:30px;

}
.sousuojilu{
	height:90px;
	text-indent:30px;
}
.zongzi{
	width:100%;
	height:auto;
	padding: 0 10px;
	

}
.zongzi p{
	
  width:100%;
  height:30px;
  text-indent:10px;
	
}
.zongzi ul{
  display: flex;
  flex-wrap: wrap;	
}
.zongzi ul li{
	
	border: 1px #ccc solid;
	border-radius: 5px;
	padding: 5px 12px;
	margin: 6px 10px;
}
</style>