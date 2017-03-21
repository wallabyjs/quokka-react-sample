// The config also be placed into package.json or global quokka config,
// see https://quokkajs.com/docs/configuration.html
({
    babel: true,
    plugins: ['jsdom-quokka-plugin']
})

import React from 'react';
import ReactDOM from 'react-dom';

document.body.innerHTML += `<div id="root"></div>`;

ReactDOM.render(
<h1>Hello, world!</h1>,
  document.getElementById('root')
);

const root = document.getElementById('root').innerHTML;
root
