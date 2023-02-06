class Car {
    constructor(ymodel, color) {
        this.ymodel = ymodel;

    }
    get model() {
        return this.ymodel;
    }

    set model(newModel) {
        this.ymodel = newModel;
    }
}

const corvette = new Car(2018);

console.log(corvette);
console.log(corvette.ymodel)

console.log('getting model with getters', corvette.model)


console.log(corvette.model = 2020)
console.log('getting model with getters', corvette.model)