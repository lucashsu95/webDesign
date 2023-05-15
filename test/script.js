let oldTop = 0;
window.onscroll = () => {
  const header = document.querySelector("header");

  let nowTop = document.documentElement.scrollTop;
  console.log(nowTop, oldTop);

  nowTop > oldTop
    ? header.classList.add("active")
    : header.classList.remove("active");

  oldTop = nowTop;
};

const app = Vue.createApp({
  data() {
    return {
      cau_flag: 0,
      cau: ["img/1.jpg", "img/2.jpg", "img/3.jpg"],
    };
  },
  methods: {},
}).mount("#app");
