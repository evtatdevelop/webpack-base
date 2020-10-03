import {Component} from '../core/component'

export class StartComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.$element.querySelector('h1').addEventListener('click', onStart.bind(this))
    }
}

function onStart() {
    this.hide()
}
