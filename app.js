class DrumKit {
  constructor() {
    this.playBtn = document.querySelector(".play");
    this.pads = document.querySelectorAll(".pad");
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.rideAudio = document.querySelector(".ride-sound");
    this.tomAudio = document.querySelector(".tom-sound");
    this.index = 0;
    this.bpm = 60;
  }
  acitvePad() {
    console.log(this);
  }
  repeat() {
    let step = this.index % 8;
    const activeBars = document.querySelectorAll(`.b${step}`);
    console.log(step);
    this.index++;
  }
  start() {
    const interval = (60 / this.bpm) * 1000;
    setInterval(() => {
      this.repeat();
    }, interval);
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
});

drumKit.playBtn.addEventListener("click", function () {
  drumKit.start();
});
