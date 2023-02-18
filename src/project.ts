import {makeProject} from '@motion-canvas/core/lib';

// Scenes
import intro from './scenes/intro?scene';
import ball from './scenes/ball?scene';
import laTeX from './scenes/laTeX?scene';
import grid from './scenes/grid?scene';

// Global CSS
import './global.css';

// Audio
// import audio from './audio/output.mp3';

export default makeProject({
  scenes: [intro, ball, laTeX, grid, grid],
  background: '#141414',

  // audio: audio,
});
  