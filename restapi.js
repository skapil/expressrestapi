var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 7000,
    router = express.Router(),
    app = express();

/* config  */
//app.use(bodyParser());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var dbUrl = 'mongodb://localhost:27017/fruits';
mongoose.connect(dbUrl);
var fruitSchema = mongoose.Schema({
    name: String,
    color: String
});
var Fruit = mongoose.model('Fruit', fruitSchema);

router.route('/')
    .get(function (req, res){
        Fruit.find(function(err, fruits) {
            if(err)            
                res.send(err);
            res.send(fruits);
        });
    })
    .post(function (req, res) {
        var fruit = new Fruit();
        fruit.name = req.body.name;
        fruit.color = req.body.color;

        fruit.save(function(err) {
            if(err)
                res.send(err);
            res.send({message: "Fruit Created"});
            });
    });

router.route('/:fruit_id')
    .put(function(req, res){
        Fruit.findOne({_id: req.params.fruit_id}, function(err, fruit) {
            fruit.name = req.body.name;
            fruit.color = req.body.color;

            fruit.save(function(err){
                if(err)
                    res.send(err);
                res.send({Message: 'Fruite Created'});
            });
        });
    })
    .delete(function(req, res){
        Fruit.remove({_id: req.params.fruit_id}, function(err) {
            if(err)
                res.send(err);
            res.send({Message : 'Fruite Deleted'});
                
        });
    });

app.use(router);
app.listen(port, function(){
    console.log('Express started on localhost:' + port + '; Select CTRL-C to terminate');
});
    