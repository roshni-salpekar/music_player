let previous = document.querySelector("#pre");
let play = document.querySelector("#play");
let next = document.querySelector("#next");
let auto_value = document.querySelector("#auto");
let title = document.querySelector("#title");
let artist = document.querySelector("#artist");
let recent_volume = document.querySelector("#volume-input");
let volume_show = document.querySelector("#volume_show");
let slider = document.querySelector("#duration_slider");

let show_duration = document.querySelector("#show_duration");
let track_image = document.querySelector("#track_image");
let present = document.querySelector("#present");
let total = document.querySelector("#total");

let timer;
let autoplay = 0;
let index_no = 0;
let playing_song = false;

// create audio element
let track = document.createElement("audio");

// all song list
let songList = [
  {
    name: "Song1",
    path: "./music/song1.mp3",
    img: "",
    singer: "singer",
  },
  {
    name: "Song2",
    path: "music/song2.mp3",
    img: "",
    singer: "singer",
  },
  {
    name: "Song3",
    path: "music/song3.mp3",
    img: "",
    singer: "singer",
  },
  {
    name: "Song4",
    path: "music/song1.mp3",
    img: "",
    singer: "singer",
  },
  {
    name: "Song5",
    path: "music/song2.mp3",
    img: "",
    singer: "singer",
  },
  {
    name: "Song6",
    path: "music/song3.mp3",
    img: "",
    singer: "",
  },
];

function load_track(index_no) {
  track.src = songList[index_no].path;
  //track_image.src = songList[index_no].img;
  title.innerHTML = songList[index_no].name;
  artist.innerHTML = songList[index_no].singer;
  console.log(songList[index_no].name);
  track.load();
  total.innerHTML = songList.length;
  present.innerHTML = index_no + 1;
  timer = setInterval(range_slider, 1000);
}

load_track(index_no);

// song playing or not
function justplay() {
  if (playing_song == false) {
    playsong();
  } else {
    pausesong();
  }
}

function playsong() {
  track.play();
  playing_song = true;
  play.innerHTML = '<i class="fas fa-pause-circle"></i>';
}

function pausesong() {
  track.pause();
  playing_song = false;
  play.innerHTML = '<i class="fas fa-play-circle"></i>';
}

function next_song() {
  if (index_no < songList.length - 1) {
    index_no += 1;
  } else {
    index_no = 0;
  }
  load_track(index_no);
  playsong();
}

function previous_song() {
  if (index_no > 0) {
    index_no -= 1;
  } else {
    index_no = songList.length;
  }
  load_track(index_no);
  playsong();
}

function volume_change() {
  volume_show.innerHTML = recent_volume.value;
  track.volume = recent_volume.value / 100;
}

function change_duration() {
  slider_position = track.duration * (slider.value / 100);
  track.currentTime = slider_position;
}

function range_slider() {
  let position = 0;
  if (isNaN(track.duration)) {
    position = track.duration * (100 / track.duration);
    slider.value = position;
  }
}
