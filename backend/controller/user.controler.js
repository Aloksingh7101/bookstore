import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
 export const signup= async(req,res)=>{
    try {
       const {fullname,email,password} =req.body;
       const user= await User.findOne({email});
       if(user){
        return res.status(400).json({message:"user already exist"});
       }
       const passwordhash = await bcrypt.hash(password,10);
       const creatuser =  new User({
           fullname : fullname,
           email : email,
           password : passwordhash
       });
       await creatuser.save();
       res.status(201).json({message:"user created succesfully",
        user:{
            _id:creatuser._id,
            fullname:creatuser.fullname,
            email:creatuser.email
        }
       });
    } catch (error) {
        console.log("Error"+error.message);
        res.status(500).json({message:"internal server error"});
    }
 }
 export const login = async (req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        const ismatch=await bcrypt.compare(password,user.password);
        if(!ismatch|| !user){
            return res.status(400).json({message:"invalid username or password "});
        }else{
            res.status(200).json({
                message:"Login successful",
                user:{
                    _id:user._id,
                    fullname:user.fullname,
                    email:user.email
                }
            })
        }
    } catch (error) {
        console.log("Error"+error.message)
        res.status(500).json({message:"internal server error "})
    }
 }