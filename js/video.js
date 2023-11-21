var video;

window.addEventListener("load", function () {
  console.log("Good job opening the window");
  video = document.querySelector("video");
  video.src = "assets/marchingband.mov";
  video.autoplay = false;
  video.loop = false;
});

document.querySelector("#play").addEventListener("click", function () {
  console.log("Play Video");
  video.play();
  let volume = document.querySelector("#volume");
  volume.innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function () {
  console.log("Pause Video");
  video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
  console.log("Slow Down");
  let currentRate = video.playbackRate;
  video.playbackRate = 0.9 * currentRate;
  console.log("The new (slowed down) video speed is: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
  console.log("Speed Up");
  let currentRate = video.playbackRate;
  video.playbackRate = currentRate / 0.9;
  console.log("The new (sped up) video speed is: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
  console.log("Skip Ahead");
  let currentLocation = video.currentTime;
  newLocation = currentLocation + 10;
  if (newLocation > video.duration) {
    newLocation = 0;
  }
  video.currentTime = newLocation;
  console.log("Current time of the video is: " + video.currentTime);
});

let mute_button = document.querySelector("#mute");
mute_button.addEventListener("click", function () {
  if (video.muted) {
    console.log("Video is unmuted");
    video.muted = false;
    mute_button.innerHTML = "Mute";
  } else {
    console.log("Video is muted");
    video.muted = true;
    mute_button.innerHTML = "Unmute";
  }
});

let volume_slider = document.querySelector("#slider");
volume_slider.addEventListener("input", function () {
  volume.innerHTML = volume_slider.value + "%";
  video.volume = volume_slider.value / 100;
  console.log("The new volume of the video is: " + video.volume);
});

document.querySelector("#vintage").addEventListener("click", function () {
  console.log("Old School");
  video.className = "oldSchool";
});

document.querySelector("#orig").addEventListener("click", function () {
  console.log("Original");
  video.className = "video";
});
