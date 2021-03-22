const app=new Vue({
    el:'#app',
    data:{
        books:[
            {
                id:1,
                name:'《算法导论》',
                date:'2006-9',
                price:85.00,
                count:1
            },
            {
                id:2,
                name:'《UNIX编程艺术》',
                date:'2006-2',
                price:59.00,
                count:1
            },
            {
                id:3,
                name:'《编程珠玑》',
                date:'2008-10',
                price:39.00,
                count:1
            },
            {
                id:4,
                name:'《代码大全》',
                date:'2006-3',
                price:128.00,
                count:1
            },
        ]
    },
    methods:{
      decrement(index) {
          this.books[index].count--;
      },
      increment(index) {
          this.books[index].count++;
      },
      remove(index) {
          this.books.splice(index,1);
      }
    },
    computed:{
        finalcount:function (){
            // let finalcount=0;
            // for (let i=0;i<this.books.length;i++){
            //     finalcount+=this.books[i].count*this.books[i].price;
            // }
            // return finalcount;

            return this.books.reduce(function (a,book){
                return a+book.price*book.count
            },0)
        }
    },
    //过滤器
    filters:{
        showPrice(price){
            <!--            ¥符号的书写方法按住Alt键不放，然后在小键盘上按0165，最后松开Alt键-->
            return '¥'+price.toFixed(2)
        }
    }
})