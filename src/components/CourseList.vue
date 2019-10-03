<template>
    <div class="course-list">
        <div class="add-section">
            <h1>添加课程</h1>
            <div>
                <label for="name">课程名称：</label>
                <input v-model="newCourse.name" type="text" name="name" id="name"/>
            </div>
            <div>
                <label for="price">课程价格：</label>
                <input v-model="newCourse.price" type="text" name="price" id="price"/>
            </div>
            <button @click="addCourse">添加到课程列表</button>
        </div>
        <div class="course-section">
            <h1>课程列表</h1>
            <table>
                <tr>
                    <th>课程名称</th>
                    <th>课程价格</th>
                    <th>操作</th>
                </tr>
                <tr v-for="(item, index) in courseList" :key="item.id">
                    <td>{{item.name}}</td>
                    <td>{{item.price}}</td>
                    <td><button @click="addToCart(item)">添加到购物车</button></td>
                </tr>
            </table>
        </div>
        <shopping-cart
                :cartList="cartList"
                @removeItem="removeItem"
                @addItem="addItem"
                @minusItem="minusItem"
        ></shopping-cart>
    </div>
</template>

<script>
    import ShoppingCart from './ShoppingCart'
    export default {
        data(){
            return {
                newCourse: {
                    name: '',
                    price: ''
                },
                courseList: [
                    {
                        id: 0,
                        name: 'web开发',
                        price: 8000
                    },{
                        id: 1,
                        name: 'python人工智能',
                        price: 9000
                    }
                ],
                cartList: []
            }
        },
        methods: {
            addCourse(){
                this.courseList.push(this.newCourse)
            },
            addToCart(courseItem){
                let isHasCourse = this.cartList.find( cartItem => cartItem.id === courseItem.id );
                if (isHasCourse) {
                    isHasCourse.number++;
                } else {
                    this.cartList.push({
                        ...courseItem,
                        number: 1,
                        isActive: true
                    });
                }

                console.log(this.cartList);
            },
            addItem(index){
                this.cartList[index].number++;
            },
            minusItem(index){
                this.cartList[index].number--;
            },
            removeItem(index){
                this.cartList.splice(index,1);
            }
        },
        components: {
            ShoppingCart
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    .course-list{
        div{
            margin: 10px;
        }
        table{
            margin: 0 auto;
        }
    }
</style>
