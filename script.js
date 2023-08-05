const app = Vue.createApp({
  data() {
    return {
      navToggleFlag: false,
      animation: [
        "animation.html",
        "loading.html",
        "normal.html",
        "國際賽.html",
        "tranform-filter/index.html",
        'footer/footer.html"',
      ],
      background: ["background.html"],
      button: [
        "button.html",
        "button2.html",
        "button3.html",
        "remember.html",
        "remember2.0/index.html",
      ],
      canvas: ["drawball.html", "調色盤.html", "小畫家"],
      card: ["border-cards", "Glass-morphism", "img-card"],
      carry_system: ["Carry_system.html"],
      clipPath: ["index.html"],
      hover: ["hover.html"],
      input: ["input.html", "input2.html"],
      navbar: [
        "menu-hover-part2",
        "menu-hover",
        "navbar-RWD",
        "navbar-基本款",
        "自動縮放navbar/index.html",
        "自動縮放navbar/index2.html",
      ],
      parallax: ["scroll.html", "mousemove.html"],
      QandA: ["Q&A.html"],
      radio: ["index.html"],
      range: ["range.html"],
      scroll: ["index.html", "opacity.html"],
      shopCar: [
        "購物車1/shopping_cart.html",
        "購物車2/order.html",
        "購物車3/index.html",
      ],
      TodoList: [
        'index.html',
        'index-modal.html',
        'index-vue.html',
      ],
      slider: [
        "slider-fade.html",
        "slider.html",
        "only-css.html",
        "vue-lg.html",
        "vue-sm.html",
        '火車過山洞.html'],
    };
  },
}).mount("#app");
