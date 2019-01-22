import express from "express";
const app = express();
const PORT = 5000;

//listening server
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
