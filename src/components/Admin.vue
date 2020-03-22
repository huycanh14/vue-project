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
                    <tbody>
                        <tr>
                            <td>Margheita</td>
                            <td><button class="btn btn-outline-danger btn-sm">X</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <h3>Current orders:</h3>
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
    </div>
</template>

<script>
    import NewPizza from "./NewPizza.vue"
    export default {
        components: {
            ppNewPizza: NewPizza,
        },
    }
</script>

<style scoped>

</style>