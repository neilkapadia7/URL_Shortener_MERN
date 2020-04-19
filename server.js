const express = require("express");

const app = express();

app.use(express.json({ extended: false }));

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server Started on Port Number :${PORT}`));
