const bcrypt = require('bcryptjs');

// ✅ Copy the exact password hash stored in your MongoDB
const storedPasswordHash = "$2a$10$CtaO9p6A20zFr09/y1E5aeuBOFetY3ZP258sdPQThaVV8k34Lyhx6"; // COPY FROM DATABASE
const enteredPassword = "susi123"; // The password you are entering

bcrypt.compare(enteredPassword, storedPasswordHash, (err, isMatch) => {
  if (err) throw err;
  console.log(isMatch ? "✅ Password matches!" : "❌ Password does NOT match!");
});
