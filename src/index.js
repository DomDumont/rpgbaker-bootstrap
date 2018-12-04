import { Game } from 'rpgbaker'
import RoomMain from './rooms/room_main'

const PIXI = require('pixi.js')

const toad = require('./assets/toad.png')

localStorage.debug = 'OhYes'
// localStorage.debug = ''

PIXI.loader.add(toad)

let myGame = new Game(800, 600)

myGame.AddRoom(new RoomMain('MainRoom'))
myGame.Init()
myGame.RoomGoto('MainRoom')
