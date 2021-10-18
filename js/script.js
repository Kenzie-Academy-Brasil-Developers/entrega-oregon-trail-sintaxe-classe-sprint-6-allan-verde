class Traveler {
    constructor (nome) {
        this.name = nome
        this.qtfood = 1
        this.isHealthy = true
    }

    hunt = () => {
        return this.qtfood += 2
    }

    eat = () => {
        if (this.qtfood > 0) {
            return this.qtfood--
        } else {
            return this.isHealthy = false
        }
    }
}

class Wagon {
    constructor (capacity) {
        this.capacity = capacity
        this.passageiros = []
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