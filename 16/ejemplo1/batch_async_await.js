const { options } = require('./options/sqliteDB');
const knex = require('knex')(options);

(async () => {
  const cars = [
    { name: "Ferrari", price: 20000000 },
    { name: "Lamborghini", price: 30000000 },
    { name: "Bugatti", price: 40000000 },
    { name: "Porsche", price: 50000000 },
    { name: "Mercedes", price: 60000000 },
    { name: "Audi", price: 70000000 },
    { name: "BMW", price: 80000000 },
    { name: "Volkswagen", price: 90000000 },
  ];

  try {
    console.log("-- -->Borramos todos los autos");
    await knex("cars").del();

    console.log("-->Insertamos autos");
    await knex("cars").insert(cars);

    console.log("-->Leemos todos los autos");
    let rows = await knex.from("cars").select("*");

    for (let row of rows) {
      console.log(`${row["id"]} - ${row["name"]} - ${row["price"]}`);
    }
    console.log("-->Insertamos un auto más");
    await knex("cars").insert({ name: "Fiat", price: 7777 });

    console.log("-->Leemos los autos actualizados");
    rows = await knex.from("cars").select("*");

    for (let row of rows) {
        // const { id, name, price } = row;
        console.log(`${row["id"]} - ${row["name"]} - ${row["price"]}`);
    }
  } catch (err) {
    console.log(err);
  } finally {
    knex.destroy();
  }
})();
