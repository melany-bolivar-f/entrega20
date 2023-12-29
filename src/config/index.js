const mongoose = require('mongoose')

exports.connectDB = async () => {
  await mongoose.connect("mongodb+srv://melanybolivarf:Artilleros1917@cluster0.jmxy9aq.mongodb.net/ecommerce?retryWrites=true&w=majority")
  console.log('Base de datos conectada')
}