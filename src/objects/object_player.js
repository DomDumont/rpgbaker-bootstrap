import { Utils, GameObject } from 'rpgbaker'

const PIXI = require('pixi.js')
const toad = require('../assets/toad.png')

export default class ObjectPlayer extends GameObject {
  Init () {
    super.Init()

    this.textureToad = PIXI.loader.resources[toad].texture

    this.toad = new PIXI.Sprite(this.textureToad)
    this.toad.x = 150
    this.toad.y = 150
    this.addChild(this.toad)
  }

  Update (delta) {
    super.Update(delta)
  }
}
