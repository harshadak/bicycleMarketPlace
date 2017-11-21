var mongoose = require('mongoose');
var Bicycle = mongoose.model('Bicycle');

module.exports = {
    create: function(req, res) {
        console.log("Created a bike");
        var bicycle = new Bicycle(req.body);
        bicycle.save(function(err, data) {
            if (err) {
                return res.json(err);
            }
            res.json(data);
        })
    },

    update: function(req, res) {
        console.log("Updating");
        Bicycle.update({_id: req.params.id}, req.body, function(err, data) {
            console.log("Updating again");
            if (err) {
                return res.json(err);
            }
            res.json(data);
        })
    },

    showmine: function(req, res) {
        Bicycle.find({_creator: req.params.id}, function(err, data) {
            if (err) {
                return res.json(err);
            }
            res.json(data);
        })
    },

    showall: function(req, res) {
        Bicycle.find({})
        .populate('_creator') // This always needs to be an attribute in the table
        .exec(function(err, data) {
            if (err) {
                return res.json(err);
            }
            res.json(data);
        })
    },

    destroy: function(req, res) {
        console.log("-----$$------Inside delete", req.params.id);
        Bicycle.remove({_id: req.params.id}, function(err, data) {
            if (err) {
                console.log("Errorring!!")
                return res.json(err);
            }
            console.log("")
            res.json(data);
        })
    },

    random: function(req, res) {
        Bicycle.aggregate(
        { 
            $sample: { size: 1 } }, function (err, data) {
            if(err) {
                return res.json(err);
            }
            res.json(data);
        })
    }
}