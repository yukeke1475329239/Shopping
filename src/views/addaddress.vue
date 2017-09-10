<template>
	<div class="addBox">
		<div class="addHead">
			<i class='fa fa-angle-left'></i>
			<span>收货人</span>
		</div>
		<div class="addcont">
			<input type="text" placeholder="收货人姓名" class='name' v-model="name" autocomplate="on"/>
			<input type="text" placeholder="手机号" class='tel' v-model="phone" autocomplate="on"/>
			<div class="menu">
				<div class="two">
					<select name="" id="" v-model="province" @change="select_province">
						<option value="">请选择省</option>
                        <option :value="p.name" v-for="p in province_list" >{{p.name}}</option>
					</select>
					<select name="" id="" v-model="city" @change="select_city">
						<option value="">请选择市</option>
                        <option v-for='c in city_list' :value="c.name">{{c.name}}</option>
					</select>
				</div>
				<select name="" id="" v-model="region">
					<option value="">请选择区</option>
                    <option v-for="r in region_list" :value="r">{{r}}</option>
				</select>
			</div>
			<input type="text" placeholder="详细地址" class='address' v-model="address" autocomplate="on"/>
			<div class="mo">
				<label class='off'>
					<input type="checkbox" v-model="is_default"/>
					<span></span>
				</label>
				设为默认地址
			</div>
			<button class='save' @click="save">保存</button>
			
		</div>
	</div>

</template>
<script>
	export default{
        data(){
            return {
                nav_dom:'',
                province_list:[],
                city_list:[],
                region_list:[],
                name:'',
                city:'',
                province:'',
                region:'',
                phone:'',
				address:'',
				is_default:true
            }
        },
		created(){
            this.nav_dom = document.querySelector('.nav');
            this.$http.get('/user/Address/info').then((data)=>{
                this.province_list = data.data.data
                
            })
        },
		mounted(){
           if(this.nav_dom){
                this.nav_dom.style.display = 'none';
           }
		   
		   let edit_address = this.$store.state.address_info[this.$route.params.index];
		   if(!edit_address) return;
		   this.name = edit_address.name;
		   this.phone = edit_address.phone;
		   this.province = edit_address.province;
		   this.city = edit_address.city;
		   this.region = edit_address.region;
		   this.address = edit_address.address;
        },
        methods:{
            save(){
				let vm = this;
				let idx = vm.$route.params.index;
                if(this.name && this.phone && this.province && this.city && this.region && this.address){
					let address = {
                        name:vm.name,
                        phone:vm.phone,
                        province:vm.province,
                        city:vm.city,
                        region:vm.region,
						address:vm.address,
						is_default:vm.is_default
                    };

					if(idx=='new'){
						this.$store.commit('add_address_info',address);
						this.$store.commit('reset_default',this.$store.state.address_info.length-1)
					}else{
						this.$store.commit('edit_address',[address,idx]);
						if(this.is_default){
							this.$store.commit('reset_default',idx)
						}
					}
					
                    vm.$router.push({name:'address'});

                    vm.save_address_to_local();

                }else{
                    alert('请填写完整信息')
                }
            },
            save_address_to_local(){
                let ls = localStorage;
                ls.setItem('address',JSON.stringify(this.$store.state.address_info))
            },
            select_province(){

                this.province_list.forEach((v,i)=> {
                    if(v.name == this.province){
                        this.city_list = v.city
                    }
                });
            },
            select_city(){

                this.city_list.forEach((v,i)=>{
                    if(v.name == this.city){
                        this.region_list = v.area
                    }
                })

            }
        }
	}
</script>
<style lang='scss' scoped>
	.addBox{
		width: 100%;
		position: absolute;
		top:0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		background: #eee;
		.addHead{
			height: 44px;
			line-height: 44px;
			background: #fafafb;
			text-align: center;
			font-size:14px;
			i{
				position: absolute;
				top: 13px;
				left: 10px;
				font-size: 20px;
			}
		}
		.addcont{
			flex: 1;
			padding: 0 10px;
			.name,.tel,.address{
				width: 100%;
				height: 40px;
				line-height: 40px;
				background: #fff;
				border: none;
				margin: 0 auto;
				padding: 0 10px;
				box-sizing: border-box;
				margin-top: 20px;
			}
			.menu{
				height: auto;
				select{
					width: 100%;
					height: 40px;
					line-height: 40px;
					background: #fff;
					border: none;
					padding-left: 10px;
					margin-top:20px;
					outline: none;
				}
				.two{
					display: flex;
					justify-content: space-between;
					select{
						width: 44%;
					}
				}
				
			}
			.mo{
				margin-top: 20px;
				line-height: 20px;
				.off input{
					display: none;
				}
				.off input:checked + span{
					background: #fb4141;
					border: 1px solid #fb4141;
				}
				.off input:checked + span::after{
					content: "";
					display: block;
					width: 12px;
					height: 6px;
					border-left: 2px solid #fff;
					border-bottom: 2px solid #fff;
					transform: translateX(2px) translateY(2px) rotate(-45deg);	
				}
				span{
					display: inline-block;
					width: 18px;
					height: 18px;
					border-radius: 100%;
					border: 1px solid #ccc;
					flex-shrink: 0;
					float: left;
					margin-right: 5px;
				}
			}
			.save{
				width: 60%;
				height: 40px;
				line-height: 40px;
				color: #fff;
				background: #FB4141;
				border: none;
				border-radius: 25px;
				display: block;
				margin: 0 auto;
				margin-top: 20px;
			}
		}
	}
</style>