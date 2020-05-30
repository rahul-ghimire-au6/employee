const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/Attainu_Employee', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true
}).then(()=>{
    console.log('db connected successfully')
}).catch((err)=>{
    throw err
});

module.exports = mongoose