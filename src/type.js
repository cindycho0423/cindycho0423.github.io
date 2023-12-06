'use strict';

new TypeIt('.home__title--strong', {
    loop: true, 
    speed: 50, 
}) // Dream Coder|
.move(-11)
.type('Amazing ') // Amazing |Dream Coder
.pause(1000)
.move(null, {to: 'END'}) // Amazing Dream Coder|
.delete() // |
.type('Front-end Engineer') //Front-end Engineer|
.pause(1000)
.move(-9)
.delete(9)
.type('Back-end')
.pause(1000)
.delete(8)
.type('Full-stack')
.pause(1000)
.move(9)
.delete()
.go();