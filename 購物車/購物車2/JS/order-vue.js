const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      products: [
        {
          img: "./images/芋頭.jpg",
          style: "",
          name: "波羅麵包",
          price: 25,
          amount: 0,
        },
        {
          img: "./images/地瓜.jpg",
          style: "filter: grayscale(1)",
          name: "灰色波羅麵包",
          price: 50,
          amount: 0,
        },
      ],
    };
  },
  methods: {
    submit() {
      // const total = this.products
      //     .map(product => product.price * product.amount)
      //     .reduce((x, y) => x + y)

      let total = 0;
      console.log(this);
      this.products.forEach((product) => {
        total += product.price * product.amount;
      });

      // console.log(total)
    },
    updateAmount(product, amount) {
      if (amount < 0) return;
      product.amount = amount;
    },
  },
}).mount("#app");
