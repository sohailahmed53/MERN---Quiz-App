const express = require('express');
const connect = require("./configs/db.js");
const bodyParser = require("body-parser");
const cors = require('cors');


const credentialsRoute = require('./controller/credentialsRoute');


const app = express();
const Port = process.env.PORT || 3755;

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const loginAuth = require("./controller/auth.controller.js");
const registerAuth = require("./controller/auth.controller.js");
const quizAdd = require("./controller/quizAdd.controller.js");
const quiz = require("./controller/displayQuiz.controller.js");
const getQuiz = require("./controller/quizAdd.controller.js");
const user = require("./controller/auth.controller.js");
const userResult = require("./controller/userData.controller.js");

// Use your credentialsRoute 
app.use("/api", credentialsRoute);

app.get('/', (req, res) => {
    res.send('Welcome to the Quiz App!');
});

app.use("/login", loginAuth);
app.use("/register", registerAuth);
app.use("/admin", quizAdd);
app.use("/quiz", quiz);
app.use("/getquiz", getQuiz);
app.use("/user", user);
app.use("/userResult", userResult);

app.listen(Port, async function () {
    try {
        await connect();
        console.log(`Listening on ${Port}`);
    } catch (error) {
        console.log(error);
    }
});
