const { options } = require('./options/sqliteDB');
const knex = require('knex')(options);

// SELECT * FROM cars
knex.from('cars').select("*").orderBy('name', 'asc')
    .then(rows => {
        for (let row of rows) {
            console.log(`${row.name} - ${row.price}`);
        }
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        knex.destroy();
    });

