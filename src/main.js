
import { Level } from "./level";

class Game {
  constructor() {
    this.level = new Level()
    this.previoustime = Date.now();

    this.run();
  }


  run() {
    let newtime = Date.now();

  }


}

window.addEventListener("DOMContentLoaded", () => { new Game(); });