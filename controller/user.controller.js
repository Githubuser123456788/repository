const bcrypt = require("bcrypt");
const mysqlConnection = require("../config/mysqlConnection");

const register = (req, res) => {
  const { username, password } = req.body;

  // Hash password
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.error("Error hashing password:", err);
      return res.status(500).json({ message: "Internal server error" });
    }

    // Insert new user into MySQL database
    mysqlConnection.query(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      [username, hash],
      (err, results) => {
        if (err) {
          console.error("Error inserting user into database:", err);
          return res.status(500).json({ message: "Internal server error" });
        }

        res.status(201).json({ message: "User registered successfully" });
      }
    );
  });
};

// Delete user
const deleteUser = (req, res) => {
  const userId = req.body.id;

  // Delete user from MySQL database
  mysqlConnection.query(
    "DELETE FROM users WHERE id = ?",
    [userId],
    (err, results) => {
      if (err) {
        console.error("Error deleting user from database:", err);
        return res.status(500).json({ message: "Internal server error" });
      }

      res.json({ message: "User deleted successfully" });
    }
  );
};

// Update user
const updateUser = (req, res) => {
  const userId = req.body.id;
  const { username, password } = req.body;

  // Hash password
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.error("Error hashing password:", err);
      return res.status(500).json({ message: "Internal server error" });
    }

    // Update user in MySQL database
    mysqlConnection.query(
      "UPDATE users SET username = ?, password = ? WHERE id = ?",
      [username, hash, userId],
      (err, results) => {
        if (err) {
          console.error("Error updating user in database:", err);
          return res.status(500).json({ message: "Internal server error" });
        }

        res.json({ message: "User updated successfully" });
      }
    );
  });
};
const getUser = (req, res) => {
  const userId = req.body.id;
  mysqlConnection.query(
    "SELECT * from users WHERE id = ?",
    [userId],
    (err, results) => {
      if (err) {
        console.error("Error updating user in database:", err);
        return res.status(500).json({ message: "Internal server error" });
      }

      res.json({ message: "User fetched successfully",results });
    }
  );
};

module.exports = {
  register,
  deleteUser,
  updateUser,
  getUser,
};
