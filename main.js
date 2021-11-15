const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Udeng',
            brand: 'Pangus Collection',
            selectedVariant: 0,
            details: ['idr 30.000','100% Pangus'],
            variants: [
              { id: 2234, color: 'black', image: './assets/produk/udeng-hitam.jpg ', quantity: 50 },
              { id: 2235, color: 'white', image: './assets/produk/udeng-putih.jpg ', quantity: 0 },
            ],
        
            onSale: true
            
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },

        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale.'
            }
            return ''
        }
    }
})

navbar