import { Room } from 'rpgbaker'
import ObjectPlayer from '../objects/object_player'

export default class RoomMain extends Room {
  Init () {
    console.log('RoomMain Init')

    this.roomWidth = 800
    this.roomHeight = 600
    var bg = new PIXI.Sprite(PIXI.Texture.WHITE)
    bg.width = this.roomWidth
    bg.height = this.roomHeight
    bg.tint = 0x00ffee
    this.addChild(bg)

    let tempPlayer = new ObjectPlayer('player', this)
    this.AddGAO(tempPlayer)
    this.addChild(tempPlayer)

    super.Init()
  }
}
