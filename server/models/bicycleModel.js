var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BicycleSchema = new Schema ({
    title: {type: String, required: [true, "Title is required"], minlength: 3},
    description: {type: String, required: [true, "Description is required"], maxlength: 200},
    price: {type: Number, required: [true, "Price is required"]},
    location: {type: String, required: [true, "Location is required"]},
    // image: {type: String, required: [true, "Image missing"]},
    _creator: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: [true, "Creator missing"]
    }
}, {timestamps: true});

mongoose.model('Bicycle', BicycleSchema);