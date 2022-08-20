
var admin = require("firebase-admin");

var serviceAccount = require("./coder-test-3973d-firebase-adminsdk-gohdr-7036bacb39.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://coder-test-3973d.firebaseio.com",
});



CRUD();


async function CRUD() {
    const db = admin.firestore();
    const query = db.collection("usuarios");
  
    try {
      /* CREATE */
      const usuarioData = {
        nombre: "Juan",
        dni: "1111111",
      };
      let doc = query.doc();
      await doc.create(usuarioData);
  
      console.log("Usuario creado");
    } catch (error) {
      console.log(error);
    }
  
    /* READ */
    query
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, "=>", doc.data());
        });
      })
      .catch((err) => {
        console.log("Error getting documents", err);
      });
  
    /* UPDATE */
    query
      .where("dni", "==", "1111111")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          doc.ref.update({ nombre: "Juanito" });
        });
      })
      .then(() => {
        console.log("Usuario actualizado");
        // mostrar usuario
        query
            .where("dni", "==", "1111111")
            .get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    console.log(doc.id, "=>", doc.data());
                });
            }).catch((err) => {
                console.log("Error getting documents", err);
            });
      })
      .catch((err) => {
        console.log("Error getting documents", err);
      });

  
    /* DELETE */
    query
      .where("dni", "==", "1111111")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          doc.ref.delete();
        });
      });
  }