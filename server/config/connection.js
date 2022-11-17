const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://DrMoE77:Yasseen2015@cluster0.qusi2.mongodb.net/priclesschemist?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
