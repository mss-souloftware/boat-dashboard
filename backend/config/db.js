// app.js or config/db.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/boat-dashboard', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true // Use this to suppress deprecation warnings for ensureIndex
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));