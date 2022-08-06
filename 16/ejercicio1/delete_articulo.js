const { options } = require('./options/mariaDB');
const knex = require('knex')(options);


const deleteArticulo = () => {
    knex.from('articulos').where({id: 3}).del()
    .then(() => console.log('articulo borrado'))
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        knex.destroy();
    });
}

module.exports = {
    deleteArticulo
};