Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product">

      <div class="product-image">
        <img :src="image" :alt="altText">
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <p v-if="inStock">In Stock: {{ inStock }}</p>
        <p v-else :class="{ 'out-of-stock': !inStock }">Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details" :key="detail">{{ detail }}</li>
        </ul>
        <div v-for="(variant, index) in variants" 
          :key="variant.id"
          class="color-box"
          :style="{ backgroundColor: variant.color }"
          @mouseover="updateProduct(index)">
        </div>
        <button 
          @click="addToCart" 
          :disabled="!inStock"
          :class="{ disabledButton: !inStock }">Add to Cart</button>
        <br><br>
        <h2>Reviews</h2>
        <p v-if="!reviews.length">There are no reviews yet!</p>

        <ul>
          <li v-for="review in reviews">
            <p>Name: {{ review.name }}</p>
            <p>Comment: {{ review.comment }}</p>
            <p>Rating: {{ review.rating }}</p>
          </li>
        </ul>        
        
        <product-review @form-submitted="addReview"></product-review>
      </div>

    </div>  
  `,
  data() {
    return {
      brand: 'Vue Mastery',
      product: 'Socks',
      description: 'Beautiful pair of socks',
      altText: 'A pair of socks',
      link: 'https://saabbir.com',
      onSale: true,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      cart: 0,
      selectedVariant: 0,
      reviews: [],
      variants: [
        {
          id: 2234,
          color: 'green',
          image: './assets/vmSocks-green.jpg',
          quantity: 100
        },
        {
          id: 2235,
          color: 'blue',
          image: './assets/vmSocks-blue.jpg',
          quantity: 0
        }
      ]
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
    shipping() {
      if (this.premium) {
        return 'Free'
      } else {
        return '2.99'
      }
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    updateProduct(index) {
      this.selectedVariant = index
    },
    addReview(review) {
      this.reviews.push(review)
    }
  }  
})

Vue.component('product-review', {
  template: `
    <form class="review-form" @submit.prevent="submitForm" width="300">

      <div v-if="errors.length">
        <p>Please fix following error(s)</p>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </div>

      <p>
        <label for="name">Name</label>
        <input id="name" type="text" v-model="name">
      </p>

      <p>
        <label for="comment">Comment</label>
        <textarea id="comment" v-model="comment"></textarea>
      </p>

      <p>
        <label for="rating">Rating</label>
        <select id="rating" v-model.number="rating">
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
      </p>

      <p>
        <input type="submit" value="Submit">  
      </p>
    </form>    
  `,
  data() {
    return {
      name: null,
      comment: null,
      rating: 5,
      errors: []
    }
  },
  methods: {
    submitForm() {
      if (this.name && this.comment && this.rating) {
        const review = {
          name: this.name,
          comment: this.comment,
          rating: this.rating
        }
        this.$emit('form-submitted', review)
        this.name = null
        this.comment = null
        this.rating = 5
        this.errors = []
      } else {
        this.errors = []
        if (!this.name) this.errors.push('Name is required.');
        if (!this.comment) this.errors.push('Comment is required.');
        if (!this.rating) this.errors.push('Rating is required.');
      }
    }
  }
})

new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: []
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    }
  }
});