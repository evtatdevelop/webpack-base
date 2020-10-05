import { Component } from '../core/component'

export class ClockComponent extends Component {
    constructor(id) {
        super(id)
        this.tt
    }

    init() {
        this.tt = setInterval(() => {
            this.$element.textContent = getTime()
        }, 1000);
    }

    stop() {
        clearTimeout(this.tt);
    }

}

const getTime = () => {
   const date = new Date()
   const hh = date.getHours().toString()
   const mm = date.getMinutes() < 10 ?  `0${date.getMinutes().toString()}` : date.getMinutes().toString()
   const ss = date.getSeconds() < 10 ? `0${date.getSeconds().toString()}` : date.getSeconds().toString()
   return `${hh}  :  ${mm}  :  ${ss}`    
}