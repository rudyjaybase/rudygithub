const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: 'This field is required.'
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: String
    },
    uOM: {
        type: String
    }
});

// Custom validation for email
// employeeSchema.path('email').validate((val) => {
//     emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return emailRegex.test(val);
// }, 'Invalid e-mail.');

mongoose.model('Product', employeeSchema);