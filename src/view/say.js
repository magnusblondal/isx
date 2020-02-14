const CFonts = require('cfonts');

const font = {
    console: 'console', 
    huge: 'huge', 
    simple3d: 'simple3d', 
    threeD: '3d', 
    simpleblock: 'simpleblock', 
    simple: 'simple', 
    chrome: 'chrome', 
    shade: 'shade', 
    block: 'block',  
}

const align = {
    left: 'left',
    center: 'center',
    right: 'right'
}
const colors = {
    ok: ['green', 'blue', 'yellow'],
    bad: ['red', 'blue', 'yellow'],
}
const opt = {
    font: font.block,
    align: align.left,              
    colors: colors.ok, 
    background: 'transparent',  
    letterSpacing: 1,           
    lineHeight: 1,              
    space: true,                // define if the output text should have empty lines on top and on the bottom
    maxLength: '0',             // define how many character can be on one line
}

const badStyle = function() {
    let o = opt
    o.colors = colors.bad
    return o;
}

const okStyle = function() {
    let o = opt
    o.colors = colors.ok
    return o;
}

const speak = function(sayThis, options) {
    CFonts.say(sayThis, options || opt);
}

const ok = function(sayThis) {
    speak(sayThis, okStyle())
}

const bad = function(sayThis) {
    speak(sayThis, badStyle())
}

module.exports = {
    ok,
    bad
}
