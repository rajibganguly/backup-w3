import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  // phaserGame: Phaser.Game;
  // config: Phaser.Types.Core.GameConfig;

  


  // constructor() {
  //   this.config = {
  //     type: Phaser.AUTO,
  //     width: 400,
  //     height: 500,
  //     parent: 'gameContainer',
  //     scene: [MainScene]
  //   };
  // }

ngOnInit() {
  // this.phaserGame = new Phaser.Game(this.config);
}

}

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  // create() {
  //   console.log('create method');
  //   // this.load.svg('astronauts', 'assets/images/astronauts.svg');
  // }
  // preload() {
  //   console.log('preload method');
  //   this.load.svg('astronauts', 'assets/images/astronauts.svg');
  // }
  // update() {
  //   this.add.image(40, 30, 'astronauts');
  // }
}