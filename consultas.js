const { Pool } = require("pg");
const pool = new Pool({
 host: "localhost",
 user: "postgres",
 password: "Vanadi123",
 database: "likeme",
 allowExitOnIdle: true,
});


const agregarPosts = async (titulo, img, descripcion, likes ) => {
    const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3, $4)";
    const values = [titulo, img, descripcion, likes];
    const result = await pool.query(consulta, values);
    console.log("Post agregado");
   };

agregarPosts();


const obtenerPosts = async () => {
    const { rows } = await pool.query("SELECT * FROM posts");
    console.log(rows);
    return rows;
   };
   obtenerPosts();

   module.exports = {agregarPosts, obtenerPosts}