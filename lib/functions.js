const csv = require('csvtojson');

module.exports = {
    parse: (f) => {
        let file = csv({flatKeys:true}).fromFile(f)
        return file
    },
    filter: (array, query) => {
        return array.filter(x =>  JSON.stringify(x).toLowerCase().indexOf(query.toLowerCase()) !== -1)
    },
    comune: (array, query) => {
        return array.filter(x => x.Comune.toLowerCase().includes(query.toLowerCase()))
    }
}