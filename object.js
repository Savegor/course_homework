const myObject = {
    sumAllNumericField(obj) {
        let result = 0
        for (i in obj) {
            if (typeof obj[i] === "number") {
                result += obj[i]
            }
        }
        return result
    },
    sumAllNumericFieldAndMas(obj) {
        let result = 0
        const listNum = []
        const resultMas = []
        for (i in obj) {
            if (typeof obj[i] === "number") {
                result += obj[i]
                listNum.push(obj[i])
            }
        }
        for (i in listNum.sort((a, b) => b - a)) {
            for (k in obj) {
                if (listNum[i] === obj[k]) {
                    resultMas.push(k)
                }
            }
        }
        return { result, resultMas }
    },
    sumAllNumericFieldAndMasAlternative(obj) {
        return [this.sumAllNumericField(obj), Object.keys(obj).filter((e) => {
            if (typeof obj[e] === "number") return e
        }).sort(function (a, b) { return obj[b] - obj[a] })]
    }
}
