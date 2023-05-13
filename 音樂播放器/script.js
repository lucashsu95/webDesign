// 获取音频元素、按钮元素、文件输入元素和进度条元素
var audio = document.getElementById("audio");
var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");
var musicInput = document.getElementById("musicInput");
var progressBar = document.getElementById("progressBar");

// 播放音乐
playBtn.addEventListener("click", function() {
    audio.play();
});

// 暂停音乐
pauseBtn.addEventListener("click", function() {
    audio.pause();
});

// 选择音乐文件
musicInput.addEventListener("change", function() {
    var file = musicInput.files[0];
    var fileURL = URL.createObjectURL(file);
    audio.src = fileURL;
});

// 更新进度条
audio.addEventListener("timeupdate", function() {
    var progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + "%";
});
