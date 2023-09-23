const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Connect to MongoDB (Make sure MongoDB is running)
mongoose.connect('mongodb://localhost/sign-up', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Create a user schema and model (You can add more fields as needed)
const User = mongoose.model('User', {
    username: String,
    email: String,
    password: String
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Users/ananyag.v/signUp page/signUp.html');
});

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    // Create a new user
    const user = new User({
        username,
        email,
        password
    });

    // Save the user to the database
    user.save()
        .then(() => {
            res.send('Sign-up successful!'); // You can redirect or send any response you like here
        })
        .catch(err => {
            res.send('Error: ' + err); // Handle errors appropriately
        });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
