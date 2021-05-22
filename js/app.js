class DrumKit {
  constructor() {
    this.playBtn = document.querySelector(".play");
    this.pads = document.querySelectorAll(".pad");
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.rideAudio = document.querySelector(".ride-sound");
    this.tomAudio = document.querySelector(".tom-sound");
    this.kickSelect = document.querySelector(".kick-select");
    this.snareSelect = document.querySelector(".snare-select");
    this.hihatSelect = document.querySelector(".hihat-select");
    this.rideSelect = document.querySelector(".ride-select");
    this.tomSelect = document.querySelector(".tom-select");
    this.index = 0;
    this.bpm = 150;
    this.isPlaying = null;
  }
  acitvePad() {
    console.log(this);
  }
  checkKickSound(e) {
    console.log(e.target.value);
    document.getElementById("kick-sound").src = e.target.value;
  }
  checkSnareSound(e) {
    console.log(e.target.value);
    document.getElementById("snare-sound").src = e.target.value;
  }
  checkHihatSound(e) {
    console.log(e.target.value);
    document.getElementById("hihat-sound").src = e.target.value;
  }
  checkRideSound(e) {
    console.log(e.target.value);
    document.getElementById("ride-sound").src = e.target.value;
  }
  checkTomSound(e) {
    console.log(e.target.value);
    document.getElementById("tom-sound").src = e.target.value;
  }

  repeat() {
    let step = this.index % 8;
    const activeBars = document.querySelectorAll(`.b${step}`);
    //Loop over the pads
    activeBars.forEach((bar) => {
      bar.style.animation = "playTrack 0.3s alternate ease-in-out 2";
      //check if pads are active
      if (bar.classList.contains("active")) {
        if (bar.classList.contains("kick-pad")) {
          this.kickAudio.currentTime = 0;
          this.kickAudio.play();
        }
        if (bar.classList.contains("snare-pad")) {
          this.snareAudio.currentTime = 0;
          this.snareAudio.play();
        }
        if (bar.classList.contains("hihat-pad")) {
          this.hihatAudio.currentTime = 0;
          this.hihatAudio.play();
        }
        if (bar.classList.contains("ride-pad")) {
          this.rideAudio.currentTime = 0;
          this.rideAudio.play();
        }
        if (bar.classList.contains("tom-pad")) {
          this.tomAudio.currentTime = 0;
          this.tomAudio.play();
        }
      }
    });
    this.index++;
  }
  start() {
    const interval = (60 / this.bpm) * 1000;
    //check if playing
    if (!this.isPlaying) {
      this.isPlaying = setInterval(() => {
        this.repeat();
      }, interval);
    } else {
      //clear the interval
      clearInterval(this.isPlaying);
      this.isPlaying = null;
    }
  }
  updateBtn() {
    if (!this.isPlaying) {
      this.playBtn.innerText = "Stop";
      this.playBtn.classList.add("active");
    } else {
      this.playBtn.innerText = "Play";
      this.playBtn.classList.remove("active");
    }
  }
}

const drumKit = new DrumKit();

// drumKit.pads.forEach((pad) => {
//   pad.addEventListener("click", drumKit.activePad);
// });

drumKit.pads.forEach((pad) => {
  pad.addEventListener("click", function () {
    this.classList.toggle("active");
  });
  pad.addEventListener("animationend", function () {
    this.style.animation = "";
  });
});

drumKit.playBtn.addEventListener("click", function () {
  drumKit.updateBtn();
  drumKit.start();
});

drumKit.kickSelect.addEventListener("click", drumKit.checkKickSound);
drumKit.snareSelect.addEventListener("click", drumKit.checkSnareSound);
drumKit.hihatSelect.addEventListener("click", drumKit.checkHihatSound);
drumKit.rideSelect.addEventListener("click", drumKit.checkRideSound);
drumKit.tomSelect.addEventListener("click", drumKit.checkTomSound);
