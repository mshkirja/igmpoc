"use strict";

function player(videoElement) {
const video = videoElement;
const progress = document.querySelector('.progress-bar');
const playPauseBtn = document.getElementById('play-pause');
const fullScreenBtn = document.getElementById('full-screen');
const cVideo = document.getElementById('c-video');

function togglePlayPause() {
    if(video.paused) {
        playPauseBtn.className = 'pause';
        video.play();
    } else {
        playPauseBtn.className = 'play';
        video.pause();
    }
}

function toggleFullScreen(elem) {
    elem.requestFullscreen = elem.requestFullscreen||elem.mozRequestFullScreen||elem.msRequestFullscreen||elem.webkitRequestFullscreen;
    elem.requestFullscreen();
}

fullScreenBtn.onclick = function () {
    toggleFullScreen(cVideo);
}

playPauseBtn.onclick = function (params) {
    //video.fastSeek(570); // 9:30
    // video.currentTime = 570; //test
    togglePlayPause();
}

video.addEventListener('timeupdate', function() {
    var juicePos = video.currentTime / video.duration;
    progress.style.width = juicePos * 100 + "%";
    if(video.ended) {
        playPauseBtn.className = "play";
        // At the end of the movie, reset the position to the start and pause the playback.
        video.currentTime = 0;
        togglePlayPause();
    }
});
}
