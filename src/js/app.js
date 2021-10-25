import Widget from './widget';

console.log('app started');

const widget = new Widget();

widget.renderDom();

const range = (start, stop, step = 1) => Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step);

console.log(range(222100, 272099));
