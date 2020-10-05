import { Component } from '../core/component'
import { ClockComponent } from './clockcomponent'

export class StartComponent extends Component {
    constructor(id) {
        super(id)
        this.clock
    }

    init() {
        if ( localStorage.getItem('visited') ){ this.hide() }
        this.$element.querySelector('h1').addEventListener('click', onStart.bind(this))
        
        this.clock = new ClockComponent('clock')
    }
}

function onStart() {
    localStorage.setItem('visited', JSON.stringify(true))
    this.hide()
    this.clock.stop()
}
