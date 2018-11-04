// Parou em 00:38:00
// https://www.youtube.com/watch?v=wFLrdw3uHDM
// servidor express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const categorias = require("./routes/categorias");
const publicacoes = require("./routes/publicacoes");

// engine para criar o html
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded());

// configurando port
const port = process.env.PORT || 3000;

// rotas
app.get("/", async (request, response) => {
  response.render("index");
});

app.use("/categorias", categorias);
app.use("/publicacoes", publicacoes);

// servidor
app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Como-fazer Server is running on port:", port);
  }
});
