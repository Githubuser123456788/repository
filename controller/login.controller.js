const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mysqlConnection = require("../config/mysqlConnection");

const SECRET_KEY = "secret";
const login = (req, res) => {
  const { username, password } = req.body;

  // Find user by username in MySQL database
  mysqlConnection.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, results) => {
      if (err) {
        console.error("Error querying database:", err);
        return res.status(500).json({ message: "Internal server error" });
      }

      if (results.length === 0) {
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }

      const user = results[0];
      bcrypt.compare(password, user.password, (err, result) => {
        if (err || !result) {
          return res
            .status(401)
            .json({ message: "Invalid username or password" });
        }
        const token = jwt.sign(
          { id: user.id, username: user.username },
          SECRET_KEY,
          { expiresIn: "1h" }
        );

        res.json({ msg:"login successfully",status:1, token });
      });
    }
  );
};

const logout = (req, res) => {
  res.json({ message: "Logged out successfully" });
};

module.exports = {
  login,
  logout,
};
