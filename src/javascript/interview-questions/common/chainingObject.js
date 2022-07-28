const calc = {
    total: 0,
    add: function (val) {
        this.total += val;
        return this;
    },
    multiply: function (val) {
        this.total *= val;
        return this;
    },
    subtract: function (val) {
        this.total -= val;
        return this;
    },
    divide: function (val) {
        this.total /= val;
        return this;
    },
}

const result = calc.add(10).multiply(20).subtract(30).divide(5);
console.log(result.total)