const app = new Vue({
  el: '#app',
  data: {
    book: [
      {id: 1, name: '计算机原理', price: 65, count: 1},
      {id: 2, name: '编程思想', price: 75, count: 1},
      {id: 3, name: 'Linux就应该这样学', price: 55, count: 1},
      {id: 4, name: 'Mysql从入门到跑路', price: 75, count: 1}
    ]
  },
  filters: {
    getPrice(price) {
      return '$' + price.toFixed(2);
    }
  },
  computed: {
    allPrice: function () {
      let price = 0;
      for (const b of this.book) {
        price += b.count * b.price;
      }
      return '$' + price.toFixed(2);
    }
  },
  methods: {
    remove(index) {
      this.book.splice(index,1);
    }
  }
})