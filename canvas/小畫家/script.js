// 获取canvas元素和绘制上下文
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// 设置绘制状态
var isDrawing = false;
var lastX = 0;
var lastY = 0;

// 监听鼠标事件
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

// 开始绘制
function startDrawing(e) {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

// 绘制过程
function draw(e) {
  if (!isDrawing) return;
  console.log(e);

  // 设置线条样式
  context.strokeStyle = "#000";
  context.lineWidth = 5;
  context.lineJoin = "round";
  context.lineCap = "round";

  // 开始绘制路径
  context.beginPath();

  // 移动到上一个点
  context.moveTo(lastX, lastY);

  // 绘制到当前点
  context.lineTo(e.offsetX, e.offsetY);

  // 绘制路径
  context.stroke();

  // 更新上一个点的位置
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

// 停止绘制
function stopDrawing() {
  isDrawing = false;
}
