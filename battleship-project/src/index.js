import Player from './classes/Player.js';
import Gamecontroller from './classes/Gamecontroller.js';
import DisplayController from './dom/Displaycontroller.js';
import './styles/global.css';

const gameController = new Gamecontroller(new Player(), new Player());
const displayController = new DisplayController(gameController);

displayController.init();
