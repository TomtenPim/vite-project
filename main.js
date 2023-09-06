import './style.css'

import {test} from './test.js'

document.querySelector('#app').innerHTML = `
<ul id="msglist"></ul>
<input id="msg" name="msg" type="text">
<button id="send">Send</button>
`

//setupCounter(document.querySelector('#counter'))

test(document.querySelector('#app'))