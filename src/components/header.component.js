import {Component} from '../core/component'

export class HeaderComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.$element.querySelector('.js-title').addEventListener('click', onTitle.bind(this))
    }

}
function onTitle() {
    console.log(this.$element.textContent)
}