class Wagon {
    constructor (capacity) {
        this._capacity = capacity
        this._passageiros = []
    }

    set capacity(capacity) {
        this._capacity = capacity
    }
    get capacity() {
        return this._capacity
    }

    set passageiros(passageiros) {
        this._passageiros = passageiros
    }
    get passageiros() {
        return this._passageiros
    }

    getAvailableSeatCount = () => {
        return this.capacity - this.passageiros.length
    }

    join = (viajante) => {
        if (this.getAvailableSeatCount() > 0) {
            this.passageiros.push(viajante)
        } else {
            return `A carroça já está cheia`
        }
    }

    shouldQuarantine = () => {
        for (let viajante of this.passageiros) {
            if (viajante.isHealthy === false) {
                return true
            }
        }
        return false
    }

    totalFood = () => {
        return this.passageiros.reduce( (acc, viajante) => {
            return acc + viajante.qtfood
        }, 0)
    }
}