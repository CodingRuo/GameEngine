
import { Level } from "./level";
import { Pointer } from "./pointer";
import { Settings } from "./settings";

class Game {
  constructor() {
    this.level = new Level()
    this.previoustime = Date.now();

    Pointer.init();

    this.run();
  }


  run = () => {
    let newtime = Date.now();
    Settings.dt = (newtime - this.previoustime) / 1000;
    this.previoustime = newtime;

    this.level.run();

    requestAnimationFrame(this.run)
  }


}

window.addEventListener("DOMContentLoaded", () => { new Game(); });