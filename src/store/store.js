import Vue from 'vue'
import Vuex from 'vuex' 
Vue.use(Vuex)

const store = {
    state:{
        goods_info:[
            
        ],
        address_info:[

        ]
    },
    mutations: {
        delete_address_info(state,idx){
            state.address_info.splice(idx,1)    
        },
        add_goods:function(state,goods){
            state.goods_info.push(goods) 
        },
        add_address_info(state,address){

            if(Object.prototype.toString.call(address) == '[object Array]'){
                state.address_info = address    
            }else if(Object.prototype.toString.call(address) == '[object Object]'){
                state.address_info.push(address)
            }else{
                console.log('格式不正确')
            }
            
        },
        edit_address(state,data){

            state.address_info[data[1]] = data[0]
        },
        reset_default(state,idx){
            state.address_info = state.address_info.map((item)=>{
                 item.is_default = false;
                 return item
            })
            state.address_info[idx].is_default = true
        }
    },
    actions: {
        add_goods:function(context,goods){
            context.commit('add_goods',goods)
        }
    }
}

export default new Vuex.Store(store)