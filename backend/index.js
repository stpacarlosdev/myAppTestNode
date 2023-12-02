const express = require("express");
const cors = require("cors");

//#CONFIG
const app = express();
const port = 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: "*/*" }));

app.use(cors());
//#ENDCONFIG

let aTrans = [];

app.get("/transactions", (req, res) => {
  // const resBody = req?.body;
  res.send(JSON.stringify(aTrans));
});

app.post("/transactions", (req, res) => {
  const resBody = req?.body;
  res.send(resBody);
  aTrans.push(resBody);
});

app.listen(port, () => {
  console.log(`Estoy ejecutandome en http://localhost:${port}`);
});
