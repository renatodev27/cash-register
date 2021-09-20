const allItemsComponent = Vue.component('all-items', {
    template: '#all-items-template',
    data() {
        return {
            productList: [
                { id: 1, description: 'Royal Burger', type: 'Food', dir: 'src/Products/royal.jpg', price: 14 },
                { id: 2, description: 'Royal with Cheese Burger', type: 'Food', dir: 'src/Products/royal_cheese.jpg', price: 16.5 },
                { id: 3, description: 'Vegan Burger', type: 'Food', dir: 'src/Products/vegan_burger.jpg', price: 12 },
                { id: 4, description: 'Turkey Burger', type: 'Food', dir: 'src/Products/turkey_burger.jpg', price: 14.5 },
                { id: 5, description: 'Glass of Beer', type: 'Alcohol', dir: 'src/Products/beer.jpg', price: 10 },
                { id: 6, description: 'Glass of Wiskey', type: 'Alcohol', dir: 'src/Products/wisky.jpg', price: 25 },
                { id: 7, description: 'Bottle of Wine', type: 'Alcohol', dir: 'src/Products/wine.jpg', price: 15 },
                { id: 8, description: 'Frozen Lemonade', type: 'Cold Drink', dir: 'src/Products/frozen_lemonade.jpg', price: 7.5 },
                { id: 9, description: 'Cocktail', type: 'Cold Drink', dir: 'src/Products/cocktail.jpg', price: 17 },
                { id: 10, description: 'Strawberry', type: 'Cold Drink', dir: 'src/Products/strawberry.jpg', price: 18 },
                { id: 11, description: 'Coke', type: 'Cold Drink', dir: 'src/Products/coke.jpg', price: 4 },
                { id: 12, description: 'Chocolate', type: 'Hot Drink', dir: 'src/Products/chocolate.jpg', price: 5.5 },
                { id: 13, description: 'American Coffe', type: 'Hot Drink', dir: 'src/Products/american_cofee.jpg', price: 3.5 },
                { id: 14, description: 'Frappuccino', type: 'Hot Drink', dir: 'src/Products/frappuccino.jpg', price: 8.9 },
                { id: 15, description: 'Mockaccino', type: 'Hot Drink', dir: 'src/Products/mockaccino.jpg', price: 9.5 },
                { id: 16, description: 'Infusion', type: 'Hot Drink', dir: 'src/Products/infusion.jpg', price: 2 },
            ],
        }
    },
    methods: {
        sendProductAiData(productos = []) {
            this.$emit('sendingproducts', productos);
        }
    }
})

const foodItemsComponent = Vue.component('food-items', {
    template: '#food-items-template',
    data() {
        return {
            productList: [
                { id: 1, description: 'Royal', type: 'Food', dir: 'src/Products/royal.jpg', price: 14 },
                { id: 2, description: 'Royal with Cheese', type: 'Food', dir: 'src/Products/royal_cheese.jpg', price: 16.5 },
                { id: 3, description: 'Vegan', type: 'Food', dir: 'src/Products/vegan_burger.jpg', price: 12 },
                { id: 4, description: 'Turkey', type: 'Food', dir: 'src/Products/turkey_burger.jpg', price: 14.5 },
            ],
        }
    }
})

const alcoholComponent = Vue.component('alcohol-items', {
    template: '#alcohol-items-template',
    data() {
        return {
            productList: [
                { id: 5, description: 'Beer', type: 'Alcohol', dir: 'src/Products/beer.jpg', price: 10 },
                { id: 6, description: 'Wiskey', type: 'Alcohol', dir: 'src/Products/wisky.jpg', price: 25 },
                { id: 7, description: 'Wine', type: 'Alcohol', dir: 'src/Products/wine.jpg', price: 15 },
            ],
        }
    }
})

const colDrinksComponent = Vue.component('cold-drinks', {
    template: '#cold-drinks-template',
    data() {
        return {
            productList: [
                { id: 8, description: 'Frozen Lemonade', type: 'Cold Drink', dir: 'src/Products/frozen_lemonade.jpg', price: 7.5 },
                { id: 9, description: 'Cocktail', type: 'Cold Drink', dir: 'src/Products/cocktail.jpg', price: 17 },
                { id: 10, description: 'Strawberry', type: 'Cold Drink', dir: 'src/Products/strawberry.jpg', price: 18 },
                { id: 11, description: 'Coke', type: 'Cold Drink', dir: 'src/Products/coke.jpg', price: 4 },
            ],
        }
    }
})

const hotDrinksComponent = Vue.component('hot-drinks', {
    template: '#hot-drinks-template',
    data() {
        return {
            productList: [
                { id: 12, description: 'Chocolate', type: 'Hot Drink', dir: 'src/Products/chocolate.jpg', price: 5.5 },
                { id: 13, description: 'American Coffe', type: 'Hot Drink', dir: 'src/Products/american_cofee.jpg', price: 3.5 },
                { id: 14, description: 'Frappuccino', type: 'Hot Drink', dir: 'src/Products/frappuccino.jpg', price: 8.9 },
                { id: 15, description: 'Mockaccino', type: 'Hot Drink', dir: 'src/Products/mockaccino.jpg', price: 9.5 },
                { id: 16, description: 'Infusion', type: 'Hot Drink', dir: 'src/Products/infusion.jpg', price: 2 },
            ],
        }
    }
})

const app = new Vue({
    el: '#app',
    data: {   
        addedProducts: []
    },
    methods: {
        reciveDataProducts(products) {
            products.map( (product) => {
                this.addedProducts.push({
                    id : product.id,
                    description : product.description,
                    type : product.type,
                    cant : 1,
                    price : product.price,
                    dir: product.dir
                });
            })
        }
    }
})