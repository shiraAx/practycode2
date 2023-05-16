// const express = require("express");

// const app = express();
// const PORT = 3000;

// app.get("/", (req, res) => {
//   res.status(200);
//   res.send("Welcome to root URL of Server");
// });

// app.listen(PORT, (error) => {
//   if (!error)
//     console.log(
//       "Server is Successfully Running, and App is listening on port " + PORT
//     );
//   else console.log("Error occurred, server can't start", error);
// });
import express from "express";
// import require from
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const app = express();
const port = 3000;


const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');

sdk.auth('rnd_IUAofOFZ8o28tkrrVF4wzFeknbyC');
sdk.getServices({limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));
  
app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
});
console.log("hi");
