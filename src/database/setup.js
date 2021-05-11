const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URL || 'mongodb://localhost:27017/contact';



module.exports = function () {
    mongoose.connect(connectionString, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, (err) => {
            if(err){
                console.log(err)
            }else {
                console.log('Database connected Sucessfully!!')
            }
        });
}
