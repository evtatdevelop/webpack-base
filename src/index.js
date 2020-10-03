import './css/main.css'
import './scss/main.scss'

import {HeaderComponent} from './components/header.component'

const header = new HeaderComponent('header')
console.log(header)

document.querySelector('h1').addEventListener('click', function() {
    document.querySelector('.start').classList.add('hide')
})

