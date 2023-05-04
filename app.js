require("@babel/register");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const renderComponent = require("./middleware/renderComponent");

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(renderComponent);

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// const indexRouter = require("./routes/index.route");
// app.use("/", indexRouter);
app.listen(PORT, () => {
  console.log(`سيرفرنا العزيز يعمل على البورت ${PORT}`);
});

//
