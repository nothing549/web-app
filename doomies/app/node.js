const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define User schema
const userSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sign In API
app.post('/signin', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  
  // Perform sign-in logic
  User.findOne({ email: email, password: password }, (error, user) => {
    if (error) {
      console.error('Error during sign in:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
    } else {
      res.json({ message: 'Sign in successful', user: user });
    }
  });
});

// Sign Up API
app.post('/signup', (req, res) => {
  const name = req.body.name;
  const surname = req.body.surname;
  const email = req.body.email;
  const password = req.body.password;

  // Perform sign-up logic
  const newUser = new User({ name: name, surname: surname, email: email, password: password });
  newUser.save((error, savedUser) => {
    if (error) {
      console.error('Error during sign up:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Sign up successful', user: savedUser });
    }
  });
});

app.listen(port, 'localhost', () => {
  console.log(`Server running at http://localhost:${port}`);
});
