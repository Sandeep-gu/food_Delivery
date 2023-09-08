const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://sg616281:S1a2n3d4@cluster0.mf9qcn8.mongodb.net/gofoodmern?retryWrites=true&w=majority'
const mongodb = async()=>{
    await mongoose.connect(mongoURI,{useNewUrlParser: true},async(err,result)=>{
    if(err) console.log(err);
    console.log("connected ");
    const fetched_data = await mongoose.connection.db.collection('food_items');
    fetched_data.find({}).toArray(function(err, data) {
        foodcategory = mongoose.connection.db.collection('food_Category');
        foodcategory.find({}).toArray(function(err, catdata) {
            if(err) console.log(err);
            else{
                global.food_items = data;
                global.food_category = catdata;
            }
        })
        // if(err) console.log(err);
        // else{
        //     global.food_items = data;
        //     //console.log(global.food_items);
        // }
    })

});
}
module.exports = mongodb;