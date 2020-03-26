<template>
    <div>
        <div class="row">
            <div class="col-sm-12 col-md-6">
                <pp-new-pizza></pp-new-pizza>
            </div>
            <div class="col-sm-12 col-md-6">
                <h3>Menu:</h3>
                <table class="table table-hover">
                    <thead class="thead-defult">
                        <tr>
                            <th>Item</th>
                            <th>Remove from menu</th>
                        </tr>
                    </thead>
                    <tbody  v-for="(item, index) in getMenuItems" :key="index">
                        <tr>
                            <td>{{ item.name }}</td>
                            <td><button class="btn btn-outline-danger btn-sm">X</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <h3>Current orders: {{ numberOfOrders }} </h3>
                <table class="table table-hover">
                    <thead class="thead-defult">
                        <tr>
                            <th>Item</th>
                            <th>Size</th>
                            <td>Quantity</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        <div class="order-number">
                            <strong><em>Order number: 1</em></strong>
                            <button class="btn btn-outline-danger btn-sm">X</button>
                        </div>
                        <tr>
                            <td>Margheita</td>
                            <td>9"</td>
                            <td>1</td>
                            <td>6.95</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <hr>

        <div class="row">
            <div class="col-sm-12 col-md-6">
                <pp-login></pp-login>
            </div>
        </div>
    </div>
</template>

<script>
    import NewPizza from "./NewPizza.vue";
    import Login from './Login.vue'
    import { mapGetters } from 'vuex'
    export default {
        components: {
            ppNewPizza: NewPizza,
            ppLogin: Login,
        },
        data() {
            return {
            }
        },
        // beforeRouteEnter: (to, from, next) => {
        //     alert(`Hello ${this.name}`);
        //     next(vm => {
        //         alert(`Hello ${vm.name}`);
        //     });
        // }
        // beforeRouteLeave: (to, from, next) => {
        //     if(confirm("Have you remember to log out") == true){
        //         next();
        //     } else {
        //         next(false);
        //     }
        // },
        computed: {
            /* Cách 1: getMenuItems() {
                return this.$store.state.menuItems; 
            },
            numberOfOrders(){
                return this.$store.getters.numberOfOrders;
            }*/
            //Cách 2
            ...mapGetters([
                'numberOfOrders',
                'getMenuItems'
            ])
        },
    }
</script>

<style scoped>

</style>