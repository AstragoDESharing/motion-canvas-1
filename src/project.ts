import {makeProject} from '@motion-canvas/core/lib';

// Scenes
import ball from './scenes/ball?scene';
import grid from './scenes/grid?scene';
import intro from './scenes/intro?scene';

// Global CSS
import './global.css';

// Audio
// import audio from './audio/output.mp3';

export default makeProject({
  scenes: [intro, ball],
  background: '#141414',

  // audio: audio,
});
 