function dish(name,mainIngridient,secondIngidient,thirdIngridient,price,image){
    return {name,mainIngridient,secondIngidient,thirdIngridient,price,image
           }
}
function order(text,type,date= new Date()){
    return{text,type,date
          }
}
    
    
 const dishes = [
    dish('Burger','Meat','Cheese','Bun','5$','img/burger.jpg'),
    dish('Pizza','Salami','Cheese','Garlic Sause','10$','img/pizza.jpg'),
    dish('Salad','Tomatos','Herb','Chees Feta','7$','img/tomatoAndHerbSalad.jpg'),
    dish('French Fries','Potato','Sauce','','3$','img/frenchFries.jpg'),
    
 ]
 let orders = [];

      
    new Vue({
        el:'#main',
        data:{
            dishes: dishes,
            dish:dishes[0],
            selectedFoodIndex:0,
            search:'',
            orders:orders,
            totalPrice:0,
            orderIndex:0 
        },
        methods:{
            selectFood:function(index){
                this.dish = dishes[index],
                this.selectedFoodIndex= index;
            },
            Order(){
                this.orders.push(
                order('You have ordered:'+this.dish.name+'    -    '+this.dish.price+''))
                this.totalPrice += parseInt(this.dish.price)
            },

            Cancel(index){
                this.totalPrice -= parseInt(this.dish.price)
                this.orders.splice(index, 1)
                
            } 
        },
        computed:{
        filteredFood(){
        var _this = this;
        const filtered = this.dishes.filter(function(dish){
        return dish.name.indexOf(_this.search)>-1
    })
        return filtered
    }
    }
})