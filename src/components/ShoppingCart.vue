<template>
    <div class="shopping-cart">
        <h1>购物车</h1>
        <table>
            <tr>
                <th>勾选</th>
                <th>课程名称</th>
                <th>课程价格</th>
                <th>数量</th>
                <th>总价</th>
            </tr>
            <tr v-for="(item, index) in cartList" :key="item.id" :class="{isActive: item.isActive}">
                <td><input type="checkbox" v-model="item.isActive"/></td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>
                    <button @click="minus(index)">-</button>
                    {{item.number}}
                    <button @click="add(index)">+</button>
                </td>
                <td>{{item.price*item.number}}</td>
            </tr>
            <br>
            <tr>
                <td>选中/总数：</td>
                <td>{{activeNum}}/{{totalNum}}</td>
                <td></td>
                <td>总钱数：</td>
                <td>{{totalPrice}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
    export default {
        props: {
            cartList: {
                type: Array,
                default: []
            }
        },
        methods:{
            add(index){
                this.$emit('addItem',index);
            },
            minus(index){
                let number = this.cartList[index].number;
                if(number>1) {
                    this.$emit('minusItem',index);
                }else{
                    if(window.confirm('确认要删除吗？')){
                        this.$emit('removeItem',index);
                    }

                }
            }
        },
        computed: {
            activeNum() {
                return this.cartList.filter(item=>item.isActive).length;
            },
            totalNum() {
                return this.cartList.length;
            },
            totalPrice() {
                let activeList =  this.cartList.filter(item=>item.isActive);
                let result= 0;
                activeList.forEach(item=>{result += item.number*item.price})
                return result;
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    .isActive{
        color: red;
    }
</style>
