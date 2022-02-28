
Vue.component('about',{
    template: `
    <div>
    <h1>{{title}}</h1>
    <h1> I love this {{animal}} photo</h1>
        <img :src="link"/>  
    </h1>
    <ul>
        <li v-for="detail in details">{{detail}}</li>
    </ul>
    <h4 v-if="available">Available</h4>
    <h4 v-else>Not Available</h4>
    
    <div class="cart">
        <button v-on:click="addToCart" >Add to Cart</button>
        <button @click = "removeFromCart">Remove From Cart</button>
        <p>Cart({{cart}})</p>

    </div>

    <a :href="link">More images like this.</a>
  
    </div>
    `,
    data(){
        return{
            animal:'Dog',
            name:'Bruno',
            available: true,
            cart:0,
            details: ["Size: 1800*900","Price: $2","Photo can be framed"],
           link:"https://img.search.brave.com/YHjo5l1FY7bx8acqZbJ7sK1VI5nV8e88VqjCbrq39vA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93YWxs/dXAubmV0L3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzEwLzA3/Lzc2NjgwOS1zYW1v/eWVkLWRvZy1kb2dz/LWNhbmluZS5qcGc"   
        }
    },
    methods:{
        addToCart: function(){
            this.cart += 1
            if(this.cart>10){
                this.available = false
            }
        },
        removeFromCart(){
            if(this.cart>0){
                this.cart-=1
            }
           if(this.cart<10){
               this.available = true 
           }
        }
    },
    computed:{
        title(){
            return this.name + ' ' + this.animal + ' photo'
        }
    }  
})

var app=new Vue({
    el:'#app',
})