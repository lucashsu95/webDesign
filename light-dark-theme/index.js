const q = document.querySelector.bind(document);

const Lswitch = q(".switch");

let color_flag = "light";

const themes = {
  light: {
    "--header": "#f90",
    "--logoColor": "#fff",
    "--fontColor": "#444",
    "--backgroundColor": "#fff",
  },
  dark: {
    "--header": "#39f",
    "--logoColor": "#444",
    "--fontColor": "#fff",
    "--backgroundColor": "#444",
  },
};

Lswitch.addEventListener("click", function () {
  this.classList.toggle("active");
  if (color_flag === "light") {
    color_flag = "dark";
  } else {
    color_flag = "light";
  }
  setcolor(themes[color_flag]);
});

function setcolor(theme) {
  for (let key in theme) {
    document.documentElement.style.setProperty(key, theme[key]);
  }
}
