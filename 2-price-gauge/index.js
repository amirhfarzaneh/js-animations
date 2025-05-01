import { animate, utils } from "/node_modules/animejs/lib/anime.esm.js";

animate('.lcd-display', {
  innerHTML: '600.5',
  modifier: utils.roundPad(2),
  duration: 1200,
  ease: 'linear',
});