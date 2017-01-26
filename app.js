var mongose =require("mongoose");
mongose.connect("mongodb://localhost/cat_app");

var catSchema = new mongose.Schema({
  name:String,
  age:Number,
  temper:String
});

var Cat = mongose.model("Cat",catSchema);

// var izCat = new Cat({
//   name:"izCat",
//   age:11,
//   temper:"Noice"
// });
//
// izCat.save(function(err,cat){
//   if(err){
//     console.log("something went wrong");
//   }else{
//     console.log("cat saved to db");
//     console.log(cat);
//   }
// })
//


Cat.create({
  name:"killIt",
  age:15,
  temper:"notNice"
},function(err,cat){
  if(err)
    console.log("ahoy error");
  else {
    console.log(cat);
  }
});

Cat.find({},function(err,cats){
  if(err)
    console.log(err);
  else {
    console.log("All them cats",cats);
  }
})
