const video = document.getElementById('backgroundVideo');
video.playbackRate = 0.7;
let deg = 0;

setInterval(() => {
    console.log(video.style);
    video.style.filter = `sepia(100%) hue-rotate(${deg}deg) saturate(1000%) brightness(50%) contrast(1.2)`
    deg++;
}, 1000);

console.log("asdadsa");