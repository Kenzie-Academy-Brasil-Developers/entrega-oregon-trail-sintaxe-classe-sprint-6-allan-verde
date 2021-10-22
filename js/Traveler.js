class Traveler {
    constructor (nome) {
        this._name = nome
        this._qtfood = 1
        this._isHealthy = true
    }

    set qtfood(qtfood) {
        this._qtfood = qtfood
    }
    get qtfood() {
        return this._qtfood
    }

    set isHealthy(isHealthy) {
        this._isHealthy = isHealthy
    }
    get isHealthy() {
        return this._isHealthy
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