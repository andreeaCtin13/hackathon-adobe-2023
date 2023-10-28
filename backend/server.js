const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const sequelize = require("./config/db");
const User = require("./models/users");
const app = express();

const port = 8080;

const router = require("./routes");

app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: "cheie_secreta",
    resave: true,
    saveUninitialized: true,
  })
);
app.use("/", router);

app.post("/login", async (req, res) => {
  try {
    const { mail, password } = req.body;
    const user = await User.findOne({ where: { mail } });

    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.user = user;
      res.status(200).json(user);
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error logging in" });
  }
});

app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Error logging out" });
    } else {
      res.status(200).json({ message: "Logged out" });
    }
  });
});

const requireAuth = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(401).json({ error: "Authentication required" });
  }
};

app.get("/protected-route", requireAuth, (req, res) => {
  res.status(200).json({ message: "This is a protected route" });
});

app.use("/", (req, res) => {
  res.status(200).send({ message: "totul ok" });
});

app.listen(port, () => {
  console.log("apasa acceleratia, pana la podea");
});
