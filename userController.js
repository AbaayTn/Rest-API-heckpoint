const User=require('./userSchema')


const userController={

getUser:async(req,res)=>{

    const users=await User.find()
    res.send(users)
},

addUser:async(req,res)=>{
    
    const user = User.create({name:req.body.name,email:req.body.email,password:req.body.password})
    res.send("user added")

},

updateUser:async(req,res)=>{
    
    User.updateOne({name:req.body.name},{name:req.body.newName})
    res.send("user added")

},

deleteUser:async(req,res)=>{
    
    const test =await User.deleteOne({name:req.body.name,email:req.body.email,password:req.body.password})
    if(test.deleteOne>0)
    res.send("user deleted")
    else res.send('erreur')

},

}
module.exports=(userController)