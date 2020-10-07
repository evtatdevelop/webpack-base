import { Component } from '../core/component';

export class ClockComponent extends Component {
    constructor(id) {
        super(id)
        this.tt
    }

    init() {
        this.tt = setInterval(() => {
            // this.$element.textContent = getTime()
            this.$element.innerHTML = renderClock(getDateTime())
        }, 1000);
    }

    stop() {
        clearTimeout(this.tt);
    }
};

const renderClock = (dt) => {
    return `${dt.hh}:${dt.mm} <span>:${dt.ss}</span>`
};

const getDateTime = () => {
   const date = new Date()
   return {
        hh: date.getHours().toString(),
        mm: date.getMinutes() < 10 ?  `0${date.getMinutes().toString()}` : date.getMinutes().toString(),
        ss: date.getSeconds() < 10 ? `0${date.getSeconds().toString()}` : date.getSeconds().toString(),
   } 
};