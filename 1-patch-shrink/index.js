import { animate, stagger } from "/node_modules/animejs/lib/anime.esm.js";
animate('.box', {
    // x: 220,
    // rotate: { from: -180 },
    scale: [1.0, 0.8],
    duration: 1250,
    delay: stagger(10, { from: 'bottom' }),
    ease: 'inOutQuint',
    loop: true,
    alternate: true
});