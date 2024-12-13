const express = require("express");
const cors = require("cors");
const { agregarPosts, obtenerPosts } = require("./consultas.js");

const app = express();
app.use(express.json());
app.use(cors());
app.listen(3000, console.log("¡Servidor encendido!"));

app.get("/posts", async (req, res) => {
  const posts = await obtenerPosts();
  res.json(posts);
});

app.post("/posts", async (req, res) => {
  const { titulo, img, descripcion, likes } = req.body;
  await agregarPosts(titulo, img, descripcion, likes);
  res.send("Posts generado correctamente");
});
