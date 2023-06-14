const app = Vue.createApp({
  data() {
    return {
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
      card: ["border-cards", "Glass-morphism"],
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
      range:['range.html'],
      range:['index.html','opacity.html'],
      
    };
  },
}).mount("#app");
