const knex = require('knex')

class ProductManager {
    constructor(options, tableName) {
        knex(options).schema.createTable(tableName, table => {
            table.increments('id')
            table.string('title', 20)
            table.integer('price')
            table.string('thumbnail', 200)
        })
            .then(() => console.log('Table created!'))
            .catch(err => console.log(err))
    }
    create = (product) => {
        return []
    }

    findAll = () => {
        return []
    }

    findById = (id) => {
        return {}
    }

    update = (id, product) => {
        return {}
    }

    delete = (id) => {
        return []
    }
}

module.exports = ProductManager