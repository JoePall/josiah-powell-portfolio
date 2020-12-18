const express = require("express");
const app = express();
const session = require("express-session");
const PORT = process.env.PORT || 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(
  session({
    secret: "Espresso in Tahiti Mornings! Fresh Seafood in Hawaii evenings!",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 86400000 },
  })
);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(requireHTTPS);
  app.use(express.static("client/build"));
}

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/build/index.html"));
// });

app.listen(PORT, function () {
  seed();
  console.log("http://localhost:" + PORT);
});

const seed = () => {
};
