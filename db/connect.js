const mongoose = require('mongoose')

exports.run = () => {
    mongoose.connect(`mongodb+srv://managerdiscord-bot.2ppe9.mongodb.net/managerbot?retryWrites=true&w=majority`, {
    auth: {
        user: "chris",
        password: "FSucBGbJDrB0IXHz"
    },
    useUnifiedTopology: true,
    useNewUrlParser: true
    }).then(
        () => { 
            console.log("Database connected");
        },
        err => { 
            console.log("Error in database connection. ", err);
        }
);
}