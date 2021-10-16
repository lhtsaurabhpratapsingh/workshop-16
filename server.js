const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  let p = new Promise((resolve, reject) => {
    let a = req.query.number;
    // console.log(a);
    if (a) {
      resolve(a);
    } else {
      reject("failed");
    }
  });

  p.then((message) => {
    res.send(`This is   ${message}`);
  }).catch((message) => {
    res.send("ERROR: " + message);
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
