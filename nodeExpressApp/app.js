

import express from "express";
import { createRequire } from "module";

const app = express();
const port = 3000;

const sdk = createRequire(import.meta.url)("api")("@render-api/v1.0#dnrc1ulf088q9j");

sdk.auth("rnd_IUAofOFZ8o28tkrrVF4wzFeknbyC");
sdk
  .getServices({ limit: "20" })
  .then(({ data }) => console.log(data))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
});
console.log("hi");
