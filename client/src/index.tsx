import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/app/App'
import './index.css'

const div = document.createElement('div');
div.setAttribute('id', 'root');

document.body.insertBefore(div, document.body.firstChild);

ReactDOM.render( <App/>, document.getElementById('root'));