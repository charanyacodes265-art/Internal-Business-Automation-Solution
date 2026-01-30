import express from "express";
import cors from "cors";
import db from "./database.js";

const app = express();
app.use(cors());
app.use(express.json());

// CREATE
app.post("/learners", (req, res) => {
  const { name, email, status } = req.body;
  db.run(
    "INSERT INTO learners (name, email, status) VALUES (?, ?, ?)",
    [name, email, status]
  );
  res.send("Learner added");
});

// READ
app.get("/learners", (req, res) => {
  db.all("SELECT * FROM learners", [], (err, rows) => {
    res.json(rows);
  });
});

// UPDATE
app.put("/learners/:id", (req, res) => {
  db.run(
    "UPDATE learners SET status=? WHERE id=?",
    [req.body.status, req.params.id]
  );
  res.send("Learner updated");
});

// DELETE
app.delete("/learners/:id", (req, res) => {
  db.run("DELETE FROM learners WHERE id=?", [req.params.id]);
  res.send("Learner deleted");
});

app.listen(6000, () => console.log("Server running on port 6000"));
